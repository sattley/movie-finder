"use client";

import { useState } from "react";
import { Movie } from "../../data/types";
import { motion } from "framer-motion";

import Image from "next/image";
import StarRating from "../rating/StarRating";
import MovieInfo from "./MovieInfo";

interface MovieCardProps {
  movie: Movie;
  handleMoreInfo: (imdbID: string) => Promise<void>;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, handleMoreInfo }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    if (!showInfo && !movie.Plot) {
      handleMoreInfo(movie.imdbID);
    }
    setShowInfo((prev) => !prev);
  };

  return (
    <motion.div
      key={movie.imdbID}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      style={{ transformOrigin: "center" }}
    >
      <div className="flex md:flex-col p-2 rounded-20 bg-[rgba(0,0,0,0.5)]">
        <div className="relative aspect-2/3 w-1/3 md:w-full">
          {movie.Poster !== "N/A" ? (
            <Image
              src={movie.Poster}
              fill
              className="rounded-xl shadow-movieImageShadow"
              alt="Movie Poster"
            />
          ) : (
            <Image
              src="/images/no_poster_found.png"
              fill
              className="rounded-xl shadow-movieImageShadow"
              alt="Poster mage not available for this movie"
            />
          )}
        </div>
        <div className="w-2/3 md:w-full flex flex-col pl-4 pb-4 md:px-4 md:pt-4 relative">
          <h3
            title={movie.Title}
            className="text-lg text-lightWhite font-bold mt-2 md:truncate md:w-full"
          >
            {movie.Title}
          </h3>
          <StarRating rating={movie.imdbRating} />
          <MovieInfo
            showInfo={showInfo}
            toggleInfo={toggleInfo}
            movie={movie}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
