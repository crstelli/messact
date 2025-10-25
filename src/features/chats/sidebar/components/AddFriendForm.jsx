import { useEffect, useState } from "react";

import { Input } from "../../../../shared/ui/form/components/Input";
import { Label } from "../../../../shared/ui/form/components/Label";
import { Submit } from "../../../../shared/ui/form/components/Submit";
import { getUser } from "../../../../services/apiAuth";

function AddFriendForm({ onSubmit }) {
  const [typing, setTyping] = useState("");
  const [userId, setUserId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(typing);
    setTyping("");
  }

  useEffect(() => {
    (async function () {
      const userId = (await getUser()).id;
      setUserId(userId);
    })();
  }, []);

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
