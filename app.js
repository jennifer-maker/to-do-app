function onReady(){

    const addToDoForm = document.getElementById('addToDoForm');
      let toDos = [];
      let id = 0;
    function createNewToDo() {

const newToDoText = document.getElementById('newToDoText');
if (!newToDoText.value) {return; }

toDos.push({
     title: newToDoText.value,
     complete: false
   });

   newToDoText.value = '';
   renderTheUI();
 }

 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');
   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";

     const delete_btn = document.createElement('button');
     delete_btn.textContent = "Delete"

     delete_btn.addEventListener('click',  event =>  {
       toDos =toDos.filter(function(item){
         return item.id (=> toDo.id;
         })

 renderTheUI();
  });

     newLi.textContent = toDo.title;
     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(delete_btn);
      });
 }

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

 }
 window.onload = function() {
 onReady();
 };
