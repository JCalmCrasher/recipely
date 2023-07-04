import { forwardRef } from "react";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Search = forwardRef<HTMLInputElement, Props>(({ onSubmit }, ref) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex">
        <input
          type="text"
          className="bg-transparent border border-teal-900 focus-visible:border-black h-11 outline-none px-4 md:w-80"
          ref={ref}
        />
        <button type="submit" className="bg-green-700 text-white p-[10px]">
          search
        </button>
      </div>
    </form>
  );
});

export default Search;

Search.displayName = "Search";
