import { TMDB_API_KEY } from "../config.js";

const BASE_URL =
"https://api.themoviedb.org/3";

export async function getTrendingMovies() {

    const response = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
    );

    const data = await response.json();

    return data.results;
}

export async function getTrendingTV() {

    const response = await fetch(
        `${BASE_URL}/trending/tv/week?api_key=${TMDB_API_KEY}`
    );

    const data = await response.json();

    return data.results;
}