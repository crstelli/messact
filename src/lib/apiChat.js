import { supabase } from "./supabase";
import { getUser, getUsername } from "./apiAuth";

// Messages
export async function fetchMessages(chatId) {
  if (chatId === "global") {
    const { data, error } = await supabase
      .from("global")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data;
  } else {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation", chatId);

    if (error) throw error;

    return data;
  }
}

export function syncMessages(chatId, fn) {
  const table = chatId === "global" ? "global" : "messages";
  const filter = chatId === "global" ? undefined : `conversation=eq.${chatId}`;

  return supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "insert", schema: "public", table, filter },
      fn,
    )
    .subscribe();
}

export async function sendMessage(content, chatId) {
  const user = await getUser();
  const username = await getUsername(user.id);

  if (chatId === "global") {
    const { error } = await supabase
      .from("global")
      .insert([{ content, sent_by_username: username }])
      .select();

    if (error) throw error;
  } else {
    const { error } = await supabase
      .from("messages")
      .insert([
        {
          content,
          conversation: chatId,
          sent_by: user.id,
        },
      ])
      .select();

    if (error) throw error;
  }
}

// Conversations
export async function fetchConversations() {
  const userId = (await getUser()).id;

  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .or(`user_1.eq.${userId}, user_2.eq.${userId}`);

  if (error) throw error;

  return data;
}

export async function syncConversations(fn) {
  const userId = (await getUser()).id;
  const channel = supabase.channel("custom-all-channel");

  channel.on(
    "postgres_changes",
    {
      event: "insert",
      schema: "public",
      table: "conversations",
      filter: `user_1=eq.${userId}`,
    },
    fn,
  );

  channel.on(
    "postgres_changes",
    {
      event: "insert",
      schema: "public",
      table: "conversations",
      filter: `user_2=eq.${userId}`,
    },
    fn,
  );

  return channel.subscribe();
}

export async function createConversation(friendId) {
  const userId = (await getUser()).id;

  if (userId === friendId) {
    throw new Error("You cannot chat with yourself");
  }

  const [user_1, user_2] =
    userId < friendId ? [userId, friendId] : [friendId, userId];
  const { data, error } = await supabase
    .from("conversations")
    .insert([
      {
        user_1,
        user_2,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}
