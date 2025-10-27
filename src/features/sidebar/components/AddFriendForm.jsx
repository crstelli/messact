import { useState } from "react";

import { Input } from "../../../shared/components/form/Input";
import { Label } from "../../../shared/components/form/Label";
import { Submit } from "../../../shared/components/form/Submit";

import { useUser } from "../../../shared/hooks/useUser";

function AddFriendForm({ onSubmit }) {
  const [typing, setTyping] = useState("");

  const { data: user } = useUser();

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
      <span className="text-xs text-slate-500">{user?.id}</span>
    </form>
  );
}

export { AddFriendForm };
