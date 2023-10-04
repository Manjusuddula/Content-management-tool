// Sample project data
const project = {
    name: "Sample Project",
    tasks: [],
};

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText) {
        project.tasks.push(taskText);
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    project.tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(listItem);
    });
}

// Function to remove a task
function removeTask(index) {
    project.tasks.splice(index, 1);
    displayTasks();
}

// Initialize the project details
document.getElementById("project-name").textContent = project.name;

// Event listeners
document.getElementById("add-task-btn").addEventListener("click", addTask);

// Initial display of tasks
displayTasks();
