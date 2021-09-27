//Coordenadas de ubicación desde JavaScript

//lenguage de browser
const lang = navigator.language
    console.log(lang)

    //user of the web
var user = navigator,userAgent
    console.log(user)

var myCacheStorage = self.caches;
    console.log(myCacheStorage)

//pixel bit dept of the screen
let depth = window.screen.pixelDepth
    console.log(depth)

let screenW = window.screen.width
var screenH = window.screen.height
    console.log(screenW, screenH)

//geolocation

var x = document.getElementById("demo")
function geolocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser,";
    }
}

function showPosition(position) {
    x.innerHTML = "latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;
}

getlocation()