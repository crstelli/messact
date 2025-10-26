import { useHeader } from "./useHeader";
import { Phone, ArrowLeft } from "lucide-react";

function Header() {
  const [username, id, goBack] = useHeader();

  return (
    <div className="relative flex items-center justify-center border-b border-slate-500 p-4">
      <ArrowLeft
        onClick={goBack}
        className="absolute left-4 size-8 cursor-pointer rounded-full bg-slate-700 p-1"
      />
      <span className="flex items-center justify-center gap-2">
        <div className="size-10 rounded-full bg-sky-200"></div>
        <h2 className="text-xl">{username}</h2>
      </span>
      {id !== "global" && (
        <span className="absolute right-4 flex size-8 items-center justify-center rounded-full bg-green-600 p-[6px] text-green-200">
          <Phone />
        </span>
      )}
    </div>
  );
}

export { Header };
