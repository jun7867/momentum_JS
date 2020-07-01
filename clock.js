const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds= date.getSeconds();
  clockTitle.innerText = 
  `${hours < 10 ? `0${hours}`:hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`; // 10보다 작을때 0붙여주기 (1 2 가 아니라 01 02..)

}
function init(){
  getTime();
  setInterval(getTime, 1000); //1초마다 함수 실행
}

init();



