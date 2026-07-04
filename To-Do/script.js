function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.querySelector(".task-list");

    const taskElement = document.createElement("article");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskElement.classList.add("completed");
        } else {
            taskElement.classList.remove("completed");
        }
    });

    const span = document.createElement("span");
    span.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(span);
    taskElement.appendChild(deleteBtn);

    taskList.appendChild(taskElement);

    taskInput.value = "";
}