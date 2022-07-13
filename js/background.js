const images = [
    "bg01.jpg",
    "bg02.jpg",
    "bg03.jpg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const backgroundDiv = document.getElementById("background__img");

const bgImg = document.createElement("img"); //Created HTML tag with javaScript

const bgDiv = document.getElementById("background__img");

bgImg.src = `bgi/${chosenImg}`;

bgDiv.appendChild(bgImg);
