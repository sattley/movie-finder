const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

// Function to fetch limited movie details based on title param
export const fetchMovies = async (query: string) => {
    try {
        const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
        
        // Start better error handling
        // Check for a 4xx/5xx status code before parsing the response
        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Error: ${response.status} ${response.statusText}`, errorData);
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if(data.Response === "True") {
            return data.Search;
        } else {
            console.error("API responded with an error:", data);
            throw new Error(data.Error || "No movies found");
        }

    } catch(error) {
        console.error("Error fetching movies: ", error);
        throw error;
    }
}

// Function to fetch more detailed information like imdbRating, Rated, etc. based on imdbID param 
export const fetchMovieDetails = async (imdbID: string) => {
    try {
        const response = await fetch(`${BASE_URL}?i=${encodeURIComponent(imdbID)}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
            return data; // Detailed movie info, including imdbRating, Rated, etc.
        } else {
            throw new Error("No movie details found");
        }

    } catch (error) {
        console.error("Error fetching movie details: ", error);
        throw error;
    }
};