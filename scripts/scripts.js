const hawaiiLink = document.getElementById('hawaii-link');
const yellowstoneLink = document.getElementById('yellowstone-link');

let buttonClicked = false

hawaiiLink.addEventListener('click', function() {
    if (!buttonClicked) {
    hawaiiLink.style.color = "white";
    yellowstoneLink.style.color="";
    hawaiiLink.innerText="Hawaii!";
    yellowstoneLink.innerText=""; // resets "Yellowstone!" text
    createParagraph("Hawaii became a part of the USA on August 21st, 1959. Hawaii is famous for its warm waters and beautiful beaches. Make sure to bring some sunscreen because the blazing sun heats Hawaii up to an average of 85° Farenheit.")
    buttonClicked = true
    }
});

yellowstoneLink.addEventListener('click', function() {
    if (!buttonClicked) {
    yellowstoneLink.style.color="white";
    hawaiiLink.style.color="";
    hawaiiLink.innerText=""; // resets "Hawaii!" text
    yellowstoneLink.innerText="Yellowstone!"; 
    createParagraph("Yellowstone National Park was founded March 1st , 1872. Yellowstone is home to many famous sites aswell as 67 different mammal species aswell as over 1000 different species of plants.")
    buttonClicked = true
    }
});

yellowstoneLink.addEventListener('hover', function() {
    yellowstoneLink.style.background = "white"
}
function createParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.className = 'border';
    newParagraph.innerText = text;
    const footer = document.querySelector('.footer')
    document.body.insertBefore(newParagraph, footer);
}