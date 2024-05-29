const hawaiiLink = document.getElementById('hawaii-link');
const yellowstoneLink = document.getElementById('yellowstone-link');

let buttonClicked = false;

hawaiiLink.addEventListener('click', function() {
    if (!buttonClicked) {
        hawaiiLink.style.color = "black";
        yellowstoneLink.style.color = "";
        hawaiiLink.innerText = "Hawaii!";
        yellowstoneLink.innerText = ""; // resets "Yellowstone!" text
        createParagraph("Hawaii became a part of the USA on August 21st, 1959. Hawaii is famous for its warm waters and beautiful beaches. Make sure to bring some sunscreen because the blazing sun heats Hawaii up to an average of 85° Fahrenheit!");
        buttonClicked = true;
    }
});

yellowstoneLink.addEventListener('click', function() {
    if (!buttonClicked) {
        yellowstoneLink.style.color = "black";
        hawaiiLink.style.color = "";
        hawaiiLink.innerText = ""; // resets "Hawaii!" text
        yellowstoneLink.innerText = "Yellowstone!";
        createParagraph("Yellowstone National Park was founded March 1st, 1872. Yellowstone is home to many famous sites as well as 67 different mammal species and over 1000 different species of plants!");
        buttonClicked = true;
    }
});

yellowstoneLink.addEventListener('mouseover', function() {
    if (!buttonClicked) {
    yellowstoneLink.style.background = "white";
    }
});

yellowstoneLink.addEventListener('mouseout', function() {
    if (!buttonClicked) {
    yellowstoneLink.style.background = "black";
    }
});

hawaiiLink.addEventListener('mouseover', function() {
    if (!buttonClicked) {
    hawaiiLink.style.background = "white";
    }
});

hawaiiLink.addEventListener('mouseout', function() {
    if (!buttonClicked) {
    hawaiiLink.style.background = "black";
    }
});

function createParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.className = 'border';
    newParagraph.innerText = text;
    const footer = document.querySelector('.footer');
    document.body.insertBefore(newParagraph, footer);
}