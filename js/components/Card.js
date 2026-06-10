export function createCard(item, type) {

    const card = document.createElement("div");

    card.classList.add("card");

    let image = "";

    if(type === "game") {
        image = item.background_image;
    }
    else {
        image =
        `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

    card.innerHTML = `
        <img src="${image}">
        <h3>${item.name || item.title}</h3>
    `;

    card.addEventListener("click", () => {

        window.location.href =
        `details.html?id=${item.id}&type=${type}`;

    });

    return card;
}