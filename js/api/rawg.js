import { RAWG_API_KEY } from "../config.js";

const BASE_URL = "https://api.rawg.io/api";

export async function getTrendingGames() {

    const response = await fetch(
        `${BASE_URL}/games?key=${RAWG_API_KEY}`
    );

    const data = await response.json();

    return data.results;
}

export async function searchGames(query) {

    const response = await fetch(
        `${BASE_URL}/games?search=${query}&key=${RAWG_API_KEY}`
    );

    const data = await response.json();

    return data.results;
}