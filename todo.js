const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos'; //const toDos와 동일.

function paintToDo(text){
  //li, delBtn element 생성
  const li= document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText="X";

  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn); // li에 delBtn 추가
  li.appendChild(span);   // li에 span 추가
  toDoList.appendChild(li); // li를 toDoList(ul)에 추가
}

function handleSumit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value=""; // 한번 입력하고 다시 초기화
}

function loadToDos(){
  const toDos=localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSumit)
}

init();
