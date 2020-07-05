const API_KEY = "";
const COORDS = 'coords';

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
}

function handleGeoError(){
  console.log("GEO Error!");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCords= localStorage.getItem(COORDS);
  if(loadedCords===null){
    askForCoords(); // 저장된 위치가 없으면 실행.
  } else {

  }
}

function init(){
  loadCoords();
}

init();
