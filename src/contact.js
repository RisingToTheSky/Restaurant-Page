import location from './images/location.png';

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");
    contact.appendChild(contactInfo);

    const locationImage = new Image();
    locationImage.src = location;
    locationImage.classList.add("location");

    contact.appendChild(createParagraph("Come to our restaurant!"));
    contactInfo.appendChild(locationImage);
    contactInfo.appendChild(createParagraph("Address: Via Cipro, 21"));
    contactInfo.appendChild(createParagraph("City: Rome"));
    contactInfo.appendChild(createParagraph("State: Lazio"));
    contactInfo.appendChild(createParagraph("Phone number: +39 6456463202"));

    return contact;
}

function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function loadContact() {
    const content = document.getElementById("content");
    content.appendChild(createContact());
    return content;
}

export default loadContact;