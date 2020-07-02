const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos'; //const toDos와 동일.

const toDos = []; // 해야 할것을 list로.

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // localStorage에 string이 들어가기 때문에 JSON.stringify를 사용
  //object를 string으로 바꿔준다.
}

function paintToDo(text){
  //li, delBtn element 생성
  const li= document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; // id가 1부터 시작
  delBtn.innerText="X";

  span.innerText = text;
  li.appendChild(delBtn); // li에 delBtn 추가
  li.appendChild(span);   // li에 span 추가
  li.id = newId; // li에 id 추가.
  toDoList.appendChild(li); // li를 toDoList(ul)에 추가
  const toDoObj = {
    text: text,
    id:  newId
  };
  toDos.push(toDoObj); // array에 추가.
  saveToDos(); // localStorage에 저장.
}

function handleSumit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value=""; // 한번 입력하고 다시 초기화
}

// function something(toDo){
//   console.log(toDo.text)
// };

function loadToDos(){
  const loadedToDos=localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos=JSON.parse(loadedToDos);//사용하기 위해서 object를 string으로 바꿔줌.
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    }); //forEach는 array 각각 함수 실행

  }
}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSumit)
}

init();
