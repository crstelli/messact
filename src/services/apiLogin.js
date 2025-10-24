import { supabase } from "../supabase";

export async function login(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
}

export async function signup(email, password, username) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: username,
      },
    },
  });

  if (error) throw error;
}

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;

  return user;
}

export async function updateUsername(username) {
  const { error } = await supabase.auth.updateUser({
    data: { full_name: username },
  });

  if (error) throw error;
}
