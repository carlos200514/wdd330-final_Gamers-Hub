const TMDB_API_KEY = "85a2b1e389282d6e91dc4aa2bf44f9e1";

export async function getTrendingMovies() {

    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );

    return await response.json();
}