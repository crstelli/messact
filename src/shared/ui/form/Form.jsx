import { Link } from "react-router";

import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { Submit } from "./components/Submit";

function Form({ children, title, alt, onSubmit }) {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-slate-900 p-4">
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-1">
        {children}
      </form>
      <h2 className="mt-2 text-center font-extralight text-slate-400">
        Or{" "}
        <Link
          to={alt.link}
          className="cursor-pointer font-bold text-slate-400 hover:underline"
        >
          {alt.text}
        </Link>
      </h2>
    </div>
  );
}

Form.Label = Label;
Form.Input = Input;
Form.Submit = Submit;

export { Form };
