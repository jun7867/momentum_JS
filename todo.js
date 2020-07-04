const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos'; //const toDos와 동일.

let toDos = []; // 해야 할것을 list로.

//함수가 true를 return 하는 아이템들이 있는 array 생성
// todo 삭제시 사용 예시
// function filterFn(toDo){
//   return toDo.id ===1
// }

//삭제의 핵심은 filter (조건에 맞는것을 return받아 추출)
function deleteToDo(event) { // target은 어떤 버튼을 눌렀는지 알 수 있게함. //console.dir로 확인해야함
//remove appendChild
  const btn=event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos= toDos.filter(function(toDo){
    return toDo.id !==  parseInt(li.id); // 모든 toDos가 'li'의 id와 같지 않을때(string,int 구분 잘해야함 )
  }); //true인 아이템만 가지고 새로운 어레이(cleanToDos) 생성
  toDos=cleanToDos
  saveToDos(); // 삭제한거 저장
}

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
  delBtn.addEventListener("click",deleteToDo); // 버튼을 눌렀을떄 deleteToDo 함수 실행

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
