const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
// Task Modal
const modal = document.getElementById("modal");
const projectName = document.getElementById("project-name");
const taskName = document.getElementById("task-name");
const datePicker = document.getElementById("date-picker");
const priorityLevel = document.getElementById("objects");
const addTaskModal = document.getElementById("submit-task");
const closeBtnModal = document.getElementById("close-btn");
const modalProject = document.getElementById("modal-project-container");

// Add project modal
const modalAddProject = document.getElementById("modal-project");
const addProjectName = document.getElementById("add-project-name");

// When add project is pressed the modal opens
// Insert project name, task name, date and priority in the modal (take the values)
// When modal's button 'add task' is pressed, modal closes and the values from the form are inputted in the new task from the project content
// The 'project name' will be added in the sidebar, this would be a div button
// If 'project name' is clicked, then it will show the current project with the current tasks

// Create an array that stores the todo tasks
let todoArray = [];
let content;

// Todo task class
class TodoTask {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// Push todo task to array
function pushTaskToArray(title, dueDate, priority) {
    todoArray.push(new TodoTask(title.value, dueDate.value, priority.value));
}

// if add task is pressed,
function addTodoTaskList(e) {
    e.preventDefault();

    // Push the task
    if (taskName.value) {
        pushTaskToArray(taskName, datePicker, priorityLevel);
    }

    for (let i in todoArray) {
        let index = i;
        content = ``;
    }

    console.log(todoArray);
}

// Open add project modal
function openProjectModal() {
    modalProject.classList.remove("hidden");
}

// Set the project name and add it to array
function setProjectName() {
    // Remove modal
    modalProject.classList.add("hidden");
}

// Open the task modal
function openTaskModal() {
    modal.classList.remove("hidden");
}

// Close the task modal
function closeTaskModal() {
    modal.classList.add("hidden");
}

// open modal
addTask.addEventListener("click", openTaskModal);
closeBtnModal.addEventListener("click", closeTaskModal);
addTaskModal.addEventListener("click", addTodoTaskList);
addProject.addEventListener("click", openProjectModal);
addProjectName.addEventListener("click", setProjectName);
