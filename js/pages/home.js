import {
    getTrendingGames,
    searchGames
}
    from "../api/rawg.js";

import {
    getTrendingMovies,
    getTrendingTV
}
    from "../api/tmdb.js";

import { createCard }
    from "../components/Card.js";

const gamesContainer =
    document.getElementById("gamesContainer");

const moviesContainer =
    document.getElementById("moviesContainer");

const tvContainer =
    document.getElementById("tvContainer");

async function loadHomePage() {
    console.log("Homepage started");

    const games =
        await getTrendingGames();
    console.log("Games:", games);

    games.slice(0, 8).forEach(game => {

        gamesContainer.appendChild(
            createCard(game, "game")
        );

    });

    const movies =
        await getTrendingMovies();

    movies.slice(0, 8).forEach(movie => {

        moviesContainer.appendChild(
            createCard(movie, "movie")
        );

    });

    const tv =
        await getTrendingTV();

    tv.slice(0, 8).forEach(show => {

        tvContainer.appendChild(
            createCard(show, "tv")
        );

    });

}

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener(
    "keyup",
    async e => {

        const query =
            e.target.value;

        if (query.length < 3) return;

        const games =
            await searchGames(query);

        gamesContainer.innerHTML = "";

        games.forEach(game => {

            gamesContainer.appendChild(
                createCard(game, "game")
            );

        });

    }
);

loadHomePage();