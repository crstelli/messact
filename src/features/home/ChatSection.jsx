import { Sidebar } from "../sidebar/Sidebar";

import { Header } from "../header/Header";
import { Chat } from "../chat/Chat";

function ChatSection() {
  return (
    <div className="flex h-[90%] max-h-[700px] min-h-[400px] w-[90%] max-w-[800px] flex-col rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900 sm:grid sm:grid-cols-[2fr_5fr] sm:grid-rows-[auto_1fr]">
      <Sidebar classes="max-sm:hidden" />
      <Header />
      <Chat />
    </div>
  );
}

export { ChatSection };
