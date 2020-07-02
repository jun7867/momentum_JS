const form=document.querySelector(".js-form"),
     input=form.querySelector("input"),
     greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
      SHOWING_CN="showing";

//localStorage에서 name을 기억하도록 setItem 함.
function saveName(text){
  localStorage.setItem(USER_LS,text);
}

//submit했을때 처리하는 함수
function handleSubmit(event){
  event.preventDefault(); // 엔터를 눌러도 새로고침이 안됨. 이벤트를 막은것. 1단계.
  const currentValue = input.value; // 입력한 값을 변수에 저장함
  paintGreeting(currentValue); // 이름 표시
  saveName(currentValue); // 이름 저장
}

function askForName() {
  form.classList.add(SHOWING_CN); // form을 화면에 보여줌
  form.addEventListener("submit",handleSubmit) // submit 했을떼 event 처리
}

// form은 지워주고 greeting은 보여줌. (폼에 이름을 입력하면 이름이 뜸.)
function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText=`Hello ${text}`;
}

//이름 불러오기
function loadName(){
  const currentUser=localStorage.getItem(USER_LS);
  if(currentUser === null){
      // not user
      askForName();
  } else {
     // user O
     paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();
