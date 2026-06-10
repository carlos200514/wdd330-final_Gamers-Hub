const params =
new URLSearchParams(window.location.search);

const id =
params.get("id");

const type =
params.get("type");

document.getElementById(
    "detailsContainer"
).innerHTML = `

    <h1>${type}</h1>

    <p>ID: ${id}</p>

`;