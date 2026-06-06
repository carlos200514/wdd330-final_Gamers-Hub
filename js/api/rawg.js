const RAWG_API_KEY = "YOUR_RAWG_KEY";

export async function getTrendingGames() {

    const response = await fetch(
        `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`
    );

    return await response.json();
}