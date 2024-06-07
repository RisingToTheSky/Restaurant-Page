import first from './images/pizzas/first.png';
import second from './images/pizzas/second.png';
import third from './images/pizzas/third.png';
import fourth from './images/pizzas/fourth.png';
import sixth from './images/pizzas/sixth.png';
import seventh from './images/pizzas/seventh.png';
import eighth from './images/pizzas/eighth.png';
import ninth from './images/pizzas/ninth.png';

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const pizzas1 = [first, second, third, fourth];
    const pizzas2 = [sixth, seventh, eighth, ninth];

    const pizzasDiv1 = document.createElement("div");
    const pizzasDiv2 = document.createElement("div");
    pizzasDiv1.classList.add("pizzas1");
    pizzasDiv2.classList.add("pizzas2");

    for (let i = 0; i < pizzas1.length; i++) {
        const image = document.createElement("img");
        image.src = pizzas1[i];
        image.classList.add("pizza");
        pizzasDiv1.appendChild(image);
    }

    for (let i = 0; i < pizzas2.length; i++) {
        const image = document.createElement("img");
        image.src = pizzas2[i];
        image.classList.add("pizza");
        pizzasDiv2.appendChild(image);
    }

    menu.appendChild(pizzasDiv1);
    menu.appendChild(pizzasDiv2);

    return menu;
}

function loadMenu() {
    const content = document.getElementById("content")
    content.appendChild(createMenu());
    return content;
}

export default loadMenu;