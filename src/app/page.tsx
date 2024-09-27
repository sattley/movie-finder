"use client";

import { useState, useEffect } from "react";
import { fetchMovies, fetchMovieDetails } from "./api/movieApi";
import { Movie } from "./data/types";
import { AnimatePresence } from "framer-motion";

import SearchInput from "./components/SearchInput";
import MovieCard from "./components/movie/MovieCard";

export default function Home() {
  const [movieQuery, setMovieQuery] = useState("");
  const [movieResults, setMovieResults] = useState<Movie[]>([]);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieQuery(e.target.value);
  };

  // Function to fetch movie details and update the our list of movies
  const fetchMovieDetailsAndUpdateList = async (imdbID: string) => {
    try {
      const movieDetails = await fetchMovieDetails(imdbID);
      // Update our list of movies with additional details like Plot and imdbRating
      setMoviesList((prevMovies) =>
        prevMovies.map((m) =>
          m.imdbID === imdbID ? { ...m, ...movieDetails } : m
        )
      );
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // Function that our dropdown/typeahead uses when you click on a movie title from dropdown/typeahead
  const handleSelectedMovie = async (selectedMovie: Movie) => {
    try {
      const movieDetails = await fetchMovieDetails(selectedMovie.imdbID);
      setMoviesList([movieDetails]);
      setSelectedMovie(null);
      setMovieResults([]);
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  // Function that our MovieCard uses to show more information about a movie
  const handleMoreInfo = async (imdbID: string) => {
    await fetchMovieDetailsAndUpdateList(imdbID);
  };

  // Fetch movies logic triggered by user querying for a movie via the SearchInput component
  useEffect(() => {
    if (movieQuery.length > 2) {
      fetchMovies(movieQuery)
        .then((results) => {
          // Populate our dropdown with search results
          setMovieResults(results);
          // Populate our list without the imdbRatings to start
          setMoviesList(results);

          // Now we can fetch the imdbRating for each movie in the list
          results.forEach(async (movie: Movie) => {
            try {
              const details = await fetchMovieDetails(movie.imdbID);
              setMoviesList((prevMovies) =>
                prevMovies.map((m) =>
                  m.imdbID === details.imdbID
                    ? { ...m, imdbRating: details.imdbRating }
                    : m
                )
              );
            } catch (error) {
              console.error(
                "Error fetching IMDb rating for movie:",
                movie.Title
              );
            }
          });
        })
        .catch((err) => {
          console.error("Error fetching movies:", err);
        });
    } else {
      // Clear the dropdown and the movies list
      setMovieResults([]);
      setMoviesList([]);
    }
  }, [movieQuery]);

  return (
    <>
      <SearchInput
        movieQuery={movieQuery}
        movieResults={movieResults}
        setMovieResults={setMovieResults}
        handleSearch={handleSearch}
        handleSelectedMovie={handleSelectedMovie}
      />
      <div className="overflow-y-auto px-4 md:px-0 mt-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {moviesList.map((movie: Movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                handleMoreInfo={handleMoreInfo}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
