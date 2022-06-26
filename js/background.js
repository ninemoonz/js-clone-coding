const images = [
    "bg_1.jpeg",
    "bg_2.jpeg",
    "bg_3.jpeg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img"); //Created HTML tag with javaScript

bgImg.src = `bgi/${chosenImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);