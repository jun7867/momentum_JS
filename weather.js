const weather = document.querySelector(".js-weather");

const API_KEY = "INPUT_KEY";
const COORDS = 'coords';

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  })
  .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  });
}
//fetch는 데이터를 가져오는곳 // unit=metric은 화씨온도를 섭씨로 보이게함.
//then은 데이터가 완전히 들어오고 나서 실행.

//localStorage에 위도 경도 값 저장.
function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude : latitude,
    longitude: longitude
  }; // 위도, 경도를 받아서 obj에 저장.
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoError(){
  console.log("GEO Error!");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCoords= localStorage.getItem(COORDS);
  if(loadedCoords===null){
    askForCoords(); // 저장된 위치가 없으면 실행.
  } else {
    const parseCoords = JSON.parse(loadedCoords); //local에 정보가 이미 있으면.
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();
