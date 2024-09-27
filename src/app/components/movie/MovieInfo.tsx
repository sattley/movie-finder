import { motion } from "framer-motion";
import { Movie } from "../../data/types";

interface MovieInfoProps {
  toggleInfo: () => void;
  showInfo: boolean;
  movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  toggleInfo,
  showInfo,
  movie,
}) => {
  return (
    <>
      <button
        onClick={toggleInfo}
        className="text-sm font-bold text-left min-h-[44px] text-lightWhite hover:text-lightOrange cursor-pointer focus:outline-none"
      >
        {showInfo ? "Show Less" : "More Info"}
      </button>
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-lightWhite overflow-hidden"
        >
          <p>{movie.Plot ? movie.Plot : "Loading more information..."}</p>
        </motion.div>
      )}
    </>
  );
};

export default MovieInfo;
