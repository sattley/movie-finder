import { useRef, ChangeEvent } from "react";
import SearchIcon from "/public/images/search-icon.svg";


interface SearchInputProps {
    movieQuery: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({movieQuery, handleInputChange}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        inputRef?.current?.focus();
    }

    return (
        <div className="flex items-center border-b-2 border-white p-2 w-full max-w-lg">
          <div onClick={handleIconClick} className="cursor-pointer text-white">
            <SearchIcon className="w-6 h-6" />
          </div>
          <input
            ref={inputRef}
            className="ml-4 bg-transparent outline-none text-white text-2xl placeholder-white w-full"
            type="text"
            value={movieQuery}
            onChange={handleInputChange}
            placeholder="Search for a movie..."
          />
        </div>
      );

}

export default SearchInput