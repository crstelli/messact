import { useState } from "react";

import { useUser } from "../../../contexts/useUser";

import { Input } from "../../../components/form/Input";
import { Label } from "../../../components/form/Label";
import { Submit } from "../../../components/form/Submit";

function AddFriendForm({ onSubmit }) {
  const [typing, setTyping] = useState("");

  const user = useUser();
  const userId = user?.id;

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(typing);
    setTyping("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <h2 className="text-center text-xl font-thin uppercase">Add a friend</h2>
      <Label>User ID</Label>
      <Input value={typing} onChange={(e) => setTyping(e.target.value)} />
      <Submit>Add</Submit>
      <h3 className="mt-4 text-center text-sm text-slate-500">Your ID</h3>
      <span className="text-xs text-slate-500">{userId}</span>
    </form>
  );
}

export { AddFriendForm };
