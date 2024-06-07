import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function initialPageLoad() {
    loadHome();
}

const buttons = document.querySelectorAll("button");
const content = document.getElementById("content");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        content.textContent = "";
        if (button.classList.contains("homeButton")) {
            loadHome();
        } else if (button.classList.contains("menuButton")) {
            loadMenu();
        } else if (button.classList.contains("contactButton")) {
            loadContact();
        }
    })
})

initialPageLoad();