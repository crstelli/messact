import { X } from "lucide-react";

function Modal({ children, onClose }) {
  return (
    <div className="fixed top-0 left-0 z-1 h-screen w-screen backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 -translate-1/2 rounded-md bg-slate-900 p-4 text-slate-300">
        <X
          onClick={onClose}
          className="absolute top-1 right-1 cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
}

export { Modal };
