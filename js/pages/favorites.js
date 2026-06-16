import {
    getFavorites
}
    from "../utilities/storage.js";

import {
    createCard
}
    from "../components/Card.js";

const container =
    document.getElementById(
        "favoritesContainer"
    );

const favorites =
    getFavorites();

favorites.forEach(item => {
    container.appendChild(
        createCard(
            item,
            item.type
        )
    );
});