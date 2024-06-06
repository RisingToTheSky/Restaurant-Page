import star from './images/star.png';

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const description = document.createElement("div");
    description.classList.add("description");
    home.appendChild(description);

    const michelinImage = new Image();
    michelinImage.src = star;
    
    description.appendChild(createParagraph("From Italy, the best food that exists"));
    description.appendChild(createParagraph("Made by quality chefs all around the world"));
    description.appendChild(michelinImage);
    description.appendChild(createParagraph("3 Michelin Stars"));

    return home;
}

function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function loadHome() {
    const content = document.getElementById("content");
    content.appendChild(createHome());
    return content;
}

export default loadHome();

