const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
  const image = new Image();
  image.src=`images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage"); // class (css)
  body.prepend(image); // 그림 위에 글씨 올라감.
}

function getRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER); //random수 생성.
  return number;
}

function init(){
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
