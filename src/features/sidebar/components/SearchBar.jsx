import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-sm font-light text-neutral-500">
      <Search size={18} />
      <input
        placeholder="Search for user or chat"
        className="placeholder:text-inherit focus:outline-none"
        type="text"
      />
    </div>
  );
}

export { SearchBar };
