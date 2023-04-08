const { reset } = require("nodemon");

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
const projectList = document.getElementById("project-list");

// Add project modal
const modalAddProject = document.getElementById("modal-project");
const addProjectName = document.getElementById("add-project-name");

// Create an array that stores the todo tasks
let todoArray = [];
let content;

// Create an object that stores title, dueDate and priority
// Todo task class
class TodoTask {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
let contentProject;
// Define the project class
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);

        console.log("miau");
    }
}

// Create a project list class
class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);

        for (let i in projects) {
            content = `<div class="todo project-task" id="task">
                            ${projectName.value}
                        </div>`;
        }
        projectList.insertAdjacentHTML("beforeend", content);
    }
}

// Create a new project list
let myProjectList = new ProjectList();

// Create some projects and tasks and add them to the project list
// let project1 = new Project("Project 1");
// let project2 = new Project("Project 1");
// let todo1 = new TodoTask("LALALALA", "12/12/2022", "HIGH");

// // Add todotask to project1
// project1.addTask(todo1);
// console.log(project1);

// myProjectList.addProject(project1);
// myProjectList.addProject(project2);

// Open add project modal
function openProjectModal() {
    modalProject.classList.remove("hidden");
}

// Set the project name and add it to array
function setProjectName() {
    let projectNameInput = projectName.value;
    let newProject = new Project(projectNameInput);
    myProjectList.addProject(newProject);
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

function setTask(e) {
    e.preventDefault();
    console.log("cacat");

    modal.classList.add("hidden");
}

// open modal
addTask.addEventListener("click", openTaskModal);
closeBtnModal.addEventListener("click", closeTaskModal);
addTaskModal.addEventListener("click", setTask);

addProject.addEventListener("click", openProjectModal);
addProjectName.addEventListener("click", setProjectName);
