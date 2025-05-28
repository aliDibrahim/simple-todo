let addButton = document.querySelector(".app .row button");
listConatiner = document.querySelector(".app .list-container ");
let input = document.querySelector(".app .row input");
let paragraph = document.querySelector(".app p");
// add tasks to the container list
addButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("You must write something.");
  } else {
    let iconSpan = document.createElement("span");
    iconSpan.classList.add("icon");
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.appendChild(iconSpan);
    listConatiner.appendChild(li);
    let deleteSpan = document.createElement("span");
    deleteSpan.classList.add("delete");
    deleteSpan.innerHTML = "\u00d7";
    li.appendChild(deleteSpan);
    notEmpty();
  }
  input.value = "";
  storeTasks();
});
// checked and delete processes
listConatiner.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN" && e.target.classList.contains("icon")) {
    e.target.parentElement.classList.toggle("checked");
    storeTasks();
  } else if (
    e.target.tagName == "SPAN" &&
    e.target.classList.contains("delete")
  ) {
    e.target.parentElement.remove();
    storeTasks();
    if (localStorage.getItem("tasks") === "") {
      empty();
    }
  }
});
// store the tasks in the local storage and show them
function storeTasks() {
  localStorage.setItem("tasks", listConatiner.innerHTML);
}
function showTasks() {
  listConatiner.innerHTML = localStorage.getItem("tasks");
  if (localStorage.getItem("tasks") === "") {
    empty();
  } else {
    notEmpty();
  }
}
// functions to update the paragraph
function notEmpty() {
  paragraph.classList.remove("empty");
  paragraph.innerHTML = "Your Tasks";
}
function empty() {
  paragraph.classList.add("empty");
  paragraph.innerHTML = "You don't have any tasks to do";
}
// ******************************************
showTasks();
