const addBtn = document.querySelector("#add_btn");
const title = document.querySelector("#title");
const todos = document.querySelector("#todos");

const handleDelete = (e) => {
  e.target.parentElement.remove();
};
const addTodoInList = () => {
  if (!title.value) return;
  const todo = document.createElement("div");
  todo.className = "todo";
  todo.innerHTML = `<span>${title.value}</span>
        <span>Edit</span>
        <span onclick="handleDelete(event)">Delete</span>`;
  todos.appendChild(todo);
  title.value = "";
};

addBtn.addEventListener("click", addTodoInList);

const abc = "abc";

const new_string = `New String ${abc}`;
