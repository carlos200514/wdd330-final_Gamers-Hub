export function saveFavorites(data) {
    localStorage.setItem(
        "favorites",
        JSON.stringify(data)
    );
}