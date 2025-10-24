import { supabase } from "../supabase";
import { getUser } from "./apiAuth";

export async function fetchMessages(chatId) {
  if (chatId === "global") {
    const { data, error } = await supabase
      .from("global")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data;
  } else {
    const { id: userId } = await getUser();
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .or(
        `and(sent_by.eq.${userId},sent_to.eq.${chatId}),and(sent_by.eq.${chatId},sent_to.eq.${userId})`,
      );

    if (error) throw error;

    return data;
  }
}

export async function sendMessage(content, chatId) {
  const user = await getUser();
  const username = user.user_metadata.username;

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
          sent_to: chatId,
        },
      ])
      .select();

    if (error) throw error;
  }
}

export function syncChat(chatId, setChat) {
  if (chatId === "global") {
    return supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "insert", schema: "public", table: "global" },
        (payload) => {
          setChat((c) => [...c, payload.new]);
        },
      )
      .subscribe();
  } else {
    return supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          setChat((c) => [...c, payload.new]);
        },
      )
      .subscribe();
  }
}
