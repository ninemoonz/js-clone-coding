const images = [
    "bg_1.jpeg",
    "bg_2.jpeg",
    "bg_3.jpeg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const backgroundDiv = document.getElementById("background__img");

const bgImg = document.createElement("img"); //Created HTML tag with javaScript

const bgDiv = document.getElementById("background__img");

bgImg.src = `bgi/${chosenImg}`;

bgDiv.appendChild(bgImg);
