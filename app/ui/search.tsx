import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

const Search = ({
  placeholder,
  handleSearch,
}: {
  placeholder: string;
  handleSearch: (e: string) => void;
}) => {
  const searchParams = useSearchParams();

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 hover:border-sky-500 focus-visible:border-sky-500 focus-visible:outline-none transition-all duration-200 ease-in py-[7px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};

export default Search;
