const RAWG_API_KEY = "02420ca05e734191abdfa72c001c31d7";

export async function getTrendingGames() {

    const response = await fetch(
        `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`
    );

    return await response.json();
}