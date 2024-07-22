let todos = [];


document.getElementById("btn").addEventListener("click", function addtask() {
  const taskinput = document.getElementById("task");
  todos.push({ id: Date.now(), task: taskinput.value, completed: false });
  // todos.push(taskinput.value);
  taskinput.value = ""; //clean input field
  console.log("task added", todos);
  displayData();
});

function displayData() {
  const taskList = document.getElementById("tasks");
  if (todos.length == 0) {
    taskList.innerHTML = `<li class='list-group-item' >The list is empty</li>`;
  } else {
    let html = "";
    for (let t of todos) {
      html += `<li class='list-group-item'>${t.task}
            <button class='btn btn-danger float-end' onclick='deleteTask("${t.id}")'>X</button>
            </li> `;
    }
    taskList.innerHTML = html;
  }
}
function deleteTask(id) {
  let foundIndex = undefined;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex != undefined) {
    todos.splice(foundIndex, 1);
    alert("Task Deleted");
    displayData();
  }
}
displayData();
