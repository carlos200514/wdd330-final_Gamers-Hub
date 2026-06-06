const TMDB_API_KEY = "YOUR_TMDB_KEY";

export async function getTrendingMovies() {

    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );

    return await response.json();
}