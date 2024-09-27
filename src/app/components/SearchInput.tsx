import { useState, useRef, ChangeEvent, ReactNode } from "react";
import SearchIcon from "/public/images/search-icon.svg";
import { Movie } from "../data/types";
import { motion } from "framer-motion";

interface SearchInputProps {
  movieQuery: string;
  movieResults: Movie[];
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectedMovie: (movie: Movie) => void;
  setMovieResults: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  movieQuery,
  movieResults,
  handleSearch,
  handleSelectedMovie,
  setMovieResults,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const closeDropdown = (resetResults: boolean = false) => {
    setIsFocused(false);
    if (resetResults) {
      // Here we'll clear the dropdown and the plot
      setMovieResults([]);
    }
  };

  const handleIconClick = () => {
    inputRef?.current?.focus();
  };

  const handleFocus = () => setIsFocused(true);
  // We'll close the dropdown but keep the movie query
  const handleBlur = () => {
    closeDropdown(false);
  };

  return (
    <>
      <div className="sticky top-16 z-20 md:relative md:top-0 flex items-center p-4 md:pb-2 md:pt-0 md:px-0  border-b border-lightWhite bg-[#3B1970] md:bg-transparent">
        <div
          onClick={handleIconClick}
          className="cursor-pointer text-lightWhite"
        >
          <SearchIcon className="w-6 h-6" />
        </div>
        <input
          ref={inputRef}
          className="ml-4 bg-transparent outline-none text-lightWhite text-xl placeholder-lightWhite w-full"
          type="text"
          value={movieQuery}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search for a movie..."
        />
      </div>
      {movieResults.length > 0 && isFocused && (
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.ul className="absolute z-20 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-lightWhite w-full max-h-64 overflow-y-auto rounded-lg shadow-lg">
            {movieResults.map((movie) => (
              <li
                key={movie.imdbID}
                onMouseDown={() => handleSelectedMovie(movie)}
                className="cursor-pointer p-3 hover:bg-[rgba(0,0,0,0.5)] transition-colors duration-200 flex justify-between items-center rounded-md mx-2 my-1"
              >
                <span className="text-lg">{movie.Title}</span>
                {movie.Year && (
                  <span className="text-sm text-lightWhite ml-4">
                    ({movie.Year})
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
};

export default SearchInput;
