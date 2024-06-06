import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function initialPageLoad() {
    loadHome;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        content.innerHtml = "";
        if (button.textContent === "Home") {
            loadHome;
        } else if (button.textContent === "Menu") {
            loadMenu;
        } else if (button.textContent === "Contact") {
            loadContact;
        }
    })
})

initialPageLoad();