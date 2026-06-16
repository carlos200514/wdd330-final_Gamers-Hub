const STORAGE_KEY =
    "favorites";
export function getFavorites() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    )
        || [];
}

export function saveFavorite(item, type) {
    const favorites =
        getFavorites();
    favorites.push({
        ...item,
        type: type
    });
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
    );
}

export function removeFavorite(id, type) {
    const favorites =
        getFavorites();
    const updated =
        favorites.filter(item =>
            !(
                item.id === id &&
                item.type === type
            )
        );
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    );
}

export function isFavorite(id, type) {
    return getFavorites()
        .some(item =>
            item.id === id &&
            item.type === type
        );
}