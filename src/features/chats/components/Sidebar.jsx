import { Search } from "lucide-react";
import { Button } from "../../../shared/ui/Button";

function Sidebar() {
  return (
    <div className="row-span-2 flex h-full w-full flex-col gap-3 bg-neutral-900/90 p-4 text-neutral-300">
      <h1>Messact</h1>
      <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-sm font-light text-neutral-500">
        <Search size={18} />
        <input
          placeholder="Search for user or chat"
          className="placeholder:text-inherit focus:outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3>Chats</h3>
        <span className="flex size-8 items-center justify-center rounded-full bg-sky-600/20 text-sm text-sky-300">
          9+
        </span>
      </div>
      <div className="flex grow flex-col gap-4">
        <div className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm">
          <div className="row-span-2 size-10 rounded-full bg-sky-200"></div>
          <h4>User Name</h4>
          <p className="font-extralight text-neutral-400">Here we go!</p>
        </div>
        <div className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm">
          <div className="row-span-2 size-10 rounded-full bg-sky-200"></div>
          <h4>User Name</h4>
          <p className="font-extralight text-neutral-400">Here we go!</p>
        </div>
        <div className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm">
          <div className="row-span-2 size-10 rounded-full bg-sky-200"></div>
          <h4>User Name</h4>
          <p className="font-extralight text-neutral-400">Here we go!</p>
        </div>
        <div className="grid cursor-pointer grid-cols-[auto_1fr] items-center gap-x-3 text-sm">
          <div className="row-span-2 size-10 rounded-full bg-sky-200"></div>
          <h4>User Name</h4>
          <p className="font-extralight text-neutral-400">Here we go!</p>
        </div>
        <Button classes={"mt-auto"}>Add a friend</Button>
      </div>
    </div>
  );
}

export { Sidebar };
