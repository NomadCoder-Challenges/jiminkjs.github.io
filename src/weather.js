const API_KEY = "6bb67cce83d651e5e7d0a0aac7b37808";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 37.5564878
    const lon = position.coords.longitude; // 127.1442596
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `It's ${data.weather[0].main} outside :) 
                            🌡 ${Math.round(data.main.temp)}℃`;
        city.innerText = `📍${data.name}`;
        
    });
}

function onGeoErr() {
    console.log("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}