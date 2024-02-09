import {v4 as uuidV4} from "../snowpack/pkg/uuid.js";
const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
const tasks = loadTasks();
tasks.forEach((task) => {
  addListItem(task);
});
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) {
    return;
  }
  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  };
  console.log("newTask:", newTask);
  addListItem(newTask);
  input.value = "";
});
function addListItem(task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  item.className = "task";
  checkbox.className = "checkbox";
  label.className = "label";
  checkbox.addEventListener("change", (e) => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  item.append(checkbox);
  label.append(task.title);
  item.append(label);
  list?.append(item);
  tasks.push(task);
}
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON === null) {
    return [];
  }
  return JSON.parse(taskJSON);
}
