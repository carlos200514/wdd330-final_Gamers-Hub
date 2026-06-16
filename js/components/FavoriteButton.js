import {
    saveFavorite,
    removeFavorite,
    isFavorite
}
    from "../utilities/storage.js";

export function createFavoriteButton(item, type) {

    const button =
        document.createElement("button");
    const favorite =
        isFavorite(item.id, type);
    button.textContent =
        favorite
            ? "★ Remove Favorite"
            : "☆ Add Favorite";
    button.addEventListener(
        "click",
        () => {
            if (isFavorite(item.id, type)) {
                removeFavorite(
                    item.id,
                    type
                );
                button.textContent =
                    "☆ Add Favorite";
            }
            else {
                saveFavorite(
                    item,
                    type
                );
                button.textContent =
                    "★ Remove Favorite";
            }
        }
    );
    return button;
}