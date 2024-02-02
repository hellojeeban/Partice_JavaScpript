const task = document.getElementById("task-input");
const note = document.getElementById("to-do");

function addTask(){
     let msg = task.value;
     
     note.innerHTML += `<div class="card">${msg}</div>`;
}