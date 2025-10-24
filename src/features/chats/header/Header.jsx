import { useHeader } from "./hooks/useHeader";
import { Phone, ArrowLeft } from "lucide-react";

function Header() {
  const [username, id] = useHeader();

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center justify-between border-b border-slate-500 p-4">
      <ArrowLeft className="size-8 rounded-full bg-slate-700 p-1" />
      <span className="flex items-center justify-center gap-2">
        <div className="size-10 rounded-full bg-sky-200"></div>
        <h2 className="text-xl">{username}</h2>
      </span>
      {id !== "global" && (
        <span className="flex size-8 items-center justify-center rounded-full bg-green-600 p-[6px] text-green-200">
          <Phone />
        </span>
      )}
    </div>
  );
}

export { Header };
