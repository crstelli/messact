import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

import { Chat } from "../chat/Chat";

function Chats() {
  return (
    <div className="grid h-[90%] max-h-[700px] min-h-[400px] w-[90%] max-w-[800px] grid-cols-[2fr_5fr] grid-rows-[auto_1fr] rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900">
      <Sidebar />
      <Header />
      <Chat />
    </div>
  );
}

export { Chats };
