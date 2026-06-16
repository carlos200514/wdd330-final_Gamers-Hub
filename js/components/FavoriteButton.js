import {
    saveFavorite,
    removeFavorite,
    isFavorite
}
    from "../utilities/storage.js";

export function createFavoriteButton(item, type) {

    const button =
        document.createElement("button");
    button.className =
        "favorite-button";
    updateButton();

    button.addEventListener(
        "click",
        (event) => {
            event.stopPropagation();
            if (isFavorite(item.id, type)) {
                removeFavorite(
                    item.id,
                    type
                );
            }
            else {
                saveFavorite(
                    item,
                    type
                );
            }
            updateButton();
        }
    );

    function updateButton() {
        button.textContent =
            isFavorite(item.id, type)
                ? "★"
                : "☆";
    }
    return button;
}