
const API_KEY = "20a04588fe4e38a93a12e0e29e2e8bbc";
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude

        // 또는
        //latitude,
        //longitude
        // 위랑 동일한 기능을 함.
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    } else {
        // GetWeather
    }
}



function init(){
    loadCoords();
}

init();