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

// Projects class
class TodoProjects {
    constructor() {
        this.projectList = [];
    }

    // Add new task to projects array
    addNewTask(title, dueDate, priority) {
        const newTask = new TodoTask(title, dueDate, priority);
        this.projectList.push(newTask);
    }

    // Add new project, take name from form input and add the project to projectList
    addNewProject(projectTitle) {}

    // For each project from the project list, create a new div with the name of the current project

    // When pressing +add task, a new todotask should be pushed in current project
}

const TodoTaskProject = new TodoProjects();

TodoTaskProject.addNewTask("caca", "1222", "high");
TodoTaskProject.addNewTask("caca", "1222", "high");

console.log(TodoTaskProject.projectList);

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
// addTaskModal.addEventListener("click", addTodoTaskList);
addProject.addEventListener("click", openProjectModal);
addProjectName.addEventListener("click", setProjectName);
