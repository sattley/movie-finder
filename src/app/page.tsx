"use client";

import { mockMovies } from "./data/mockMovies";

import { useState } from "react";
import Image from "next/image";

import SearchInput from "./components/SearchInput";
import StarRating from "./components/StarRating";

export default function Home() {
  const [movieQuery, setMovieQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieQuery(e.target.value);
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4">
      
      <SearchInput movieQuery={movieQuery} handleInputChange={handleInputChange} />

      {/* Let's display the query for testing purposes */}
      {movieQuery && (
        <p className="mt-2 text-gray-600">
          You are searching for: {movieQuery}
        </p>
      )}
      <div className="bg-list rounded-40 mt-8">
        {mockMovies.map((movie) => (
          <div
            id="movieOuterRow"
            className="flex items-stretch space-x-4 p-12 border-b-4 border-b-listRowBorder"
          >
            <div className="w-1/3 aspect-[2/3]">
              <div className="relative">
              <Image
                src={movie.Poster}
                objectFit="cover"
                width={640}
                height={960}
                className="w-full h-auto rounded-12 shadow-poster"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                alt="Poster Image for Movie"
              />
              </div>
            </div>
            <div className="w-2/3 flex flex-col justify-between relative">
              <div>
                <h3 className="text-4xl font-bold text-white">{movie.Title}</h3>
                <StarRating rating={6.4} />
                <p className="text-sm text-white">{movie.Plot}</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>Release Date: {movie.Year}</p>
                <p>Rating: {movie.Rated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
