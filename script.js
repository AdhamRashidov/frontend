const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
	const text = taskInput.value.trim();
	if (text === "") {
		return alert("Iltimos nimadir kiriting");
	}
	const li = document.createElement("li");

	const span = document.createElement("span");
	span.textContent = text;

	const actions = document.createElement("div");
	actions.classList.add("actions");

	const editBtn = document.createElement("button");
	editBtn.textContent = "Tahrirlash";
	editBtn.classList.add("edit");
	editBtn.addEventListener("click", () => editTask(span, editBtn));

	const delBtn = document.createElement("button");
	delBtn.textContent = "O‘chirish";
	delBtn.classList.add("delete");
	delBtn.addEventListener("click", () => li.remove());

	actions.appendChild(editBtn);
	actions.appendChild(delBtn);

	li.appendChild(span);
	li.appendChild(actions);
	taskList.appendChild(li);

	taskInput.value = "";
}

function editTask(span, btn) {
  if (btn.textContent === "Tahrirlash") {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    span.replaceWith(input);
    btn.textContent = "Saqlash";
  } else {
    const newSpan = document.createElement("span");
    const input = btn.parentElement.parentElement.querySelector("input");
    newSpan.textContent = input.value;
    input.replaceWith(newSpan);
    btn.textContent = "Tahrirlash";
  }
}