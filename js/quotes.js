const quotes = [
    {
        quote: "A good man is a very dangerous man who has that under voluntary control.",
        author: "Jordan Peterson"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.",
        author: "Tim O Reily"
    },
    {
        quote: "Use the weekend to build the life you want instead of trying to escape the life you have.",
        author: "Jari Roomer"
    },
    {
        quote: "The only thing worse than starting something and falling.. is not starting something.",
        author: "Seth Godin"
    },
    {
        quote: "Life is like a box of chocolates, you never know what you're going to get.",
        author: "Forrest Gump"
    },
    {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const headerPanel = document.querySelector("header");

const quoteLength = quotes.length;
const randInt = Math.random() * quoteLength;
const randIntFloor = Math.floor(randInt);
const todaysQuote = quotes[randIntFloor];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

function headerClick() {
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}
headerPanel.addEventListener("click", headerClick);


/*
const randIntRound = Math.round(randInt);
const randIntCeil = Math.ceil(randInt);
const randIntFloor = Math.floor(randInt);
console.log(randIntRound);
console.log(randIntCeil);
console.log(randIntFloor);
*/

