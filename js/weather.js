const API_KEY="4d9f2aba6ff6dc933c91d79a1aeda74e";

function onGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("You live in ", latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json()
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}   
function onGeoError(){
    alert("Can't find the current location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

