import { supabase } from "../supabase";
import { getUser } from "./apiLogin";

export async function fetchMessages(chatId) {
  if (chatId === "global") {
    const { data, error } = await supabase.from("global").select("*");

    if (error) throw error;
    return data;
  }
}

export async function fetchUsername(chatId) {
  if (chatId === "global") return "Global Chat";
}

export async function sendMessage(content, chatId) {
  const {
    id: userId,
    user_metadata: { full_name },
  } = await getUser();

  if (chatId === "global") {
    const { error } = await supabase
      .from("global")
      .insert([{ sent_by: userId, content, sent_by_username: full_name }])
      .select();

    if (error) throw error;
  }
}

export function syncChat(chatId, setChat) {
  if (chatId === "global")
    return supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "global" },
        (payload) => {
          setChat((c) => [...c, payload.new]);
        },
      )
      .subscribe();
}
