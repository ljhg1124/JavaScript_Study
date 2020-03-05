
const weather = document.querySelector(".js-weather");

const API_KEY = "20a04588fe4e38a93a12e0e29e2e8bbc";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
        console.log(json);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //latitude: latitude,
        //longitude: longitude

        // 또는
        latitude,
        longitude
        // 위랑 동일한 기능을 함.
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    } else {
        // GetWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init();