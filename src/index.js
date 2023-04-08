import { Modal, ModalProjects } from "./modules/modals";

const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const form = document.getElementById("form-container");

const projectName = document.getElementById("project-name");
const taskName = document.getElementById("task-name");
const datePicker = document.getElementById("date-picker");
const priorityLevel = document.getElementById("objects");
const addTaskModal = document.getElementById("submit-task");
const closeBtnModal = document.getElementById("close-btn");
const modalProject = document.getElementById("modal-project-container");
const projectList = document.getElementById("project-list");

const addProjectName = document.getElementById("add-project-name");

let taskContent;

// Create todo object
class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// Create list of todos
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    // Add todo task to the project array
    addTask(title, dueDate, priority) {
        const todo = new Todo(title, dueDate, priority);
        this.tasks.push(todo);
    }
}

// Create a list of projects
class ProjectList {
    constructor() {
        this.projects = [];
    }

    // Add project to the projects list array
    addProject(project) {
        this.projects.push(project);
    }
}

// Create a new project list
let myProjectList = new ProjectList();
let todoTaskList = new Project();

// Create a new project name
let project1 = new Project("1 test project");
let project2 = new Project("2 test project");

// Add tasks to project1
project1.addTask("1 Task test for project 1", "12/12/1222", "high");
project1.addTask("11 Task test for project 1", "12/12/1222", "high");
project2.addTask("2 Task test for project 2", "12/12/1222", "high");
console.log(project1);

// Add project1 to myProjectList
myProjectList.addProject(project1);
myProjectList.addProject(project2);
console.log(myProjectList);

for (let i = 0; i < myProjectList.projects.length; i++) {
    console.log(`Project ${i + 1}: ${myProjectList.projects[i].name}`);
    console.log("Tasks:");
    for (let j = 0; j < myProjectList.projects[i].tasks.length; j++) {
        console.log(
            `- ${myProjectList.projects[i].tasks[j].title} (${myProjectList.projects[i].tasks[j].dueDate})`
        );
    }
    console.log("");
}

function renderTasks(array) {
    for (let i in array) {
        taskContent = `                        <div class="todo-task" id="todo-task" data-todoId=${i}>
        <div class="left-part">
            <input type="radio" name="" />
            <div class="todo-task-name" id="todo-task-name">
                ${taskName.value}
            </div>
        </div>

        <div class="right-part">
            <div class="priority-level" id="priority-level">
                ${priorityLevel.value}
            </div>
            <input type="date" />
            <div class="delete-task" id="delete-task">
                &times;
            </div>
        </div>
    </div>`;
    }
    return taskContent;
}

// TBD
// Create an HTML element for the project list
let projectListElement = document.createElement("div");
projectListElement.setAttribute("id", "project-list");
document.body.appendChild(projectListElement);

// Create HTML elements for each project and add them to the project list
for (let i = 0; i < myProjectList.projects.length; i++) {
    let projectElement = document.createElement("div");
    projectElement.innerText = myProjectList.projects[i].name;
    projectListElement.appendChild(projectElement);

    // Add an event listener to the project element to show the tasks for the clicked project
    projectElement.addEventListener("click", function () {
        let tasks = myProjectList.projects[i].tasks;
        for (let j = 0; j < tasks.length; j++) {
            console.log(tasks[j].title);
        }
    });
}

// Event listeners

// Add project and project name
addProject.addEventListener("click", function () {
    projectModal.openProjectModal();
});

addProjectName.addEventListener("click", function () {
    // Add new project to myProjectList
    let project = new Project(projectName.value);
    myProjectList.addProject(project);

    // Close the modal
    projectModal.closeProjectModal();

    // Clear the modal
    projectName.value = "";
    console.log(myProjectList);
});

// Render tasks from todoTaskList
form.addEventListener("submit", function (e) {
    e.preventDefault();

    todoTaskList.addTask(taskName.value, datePicker.value, priorityLevel.value);

    renderTasks(todoTaskList);

    taskList.insertAdjacentHTML("beforeend", taskContent);

    mainModal.closeModal();
    form.reset();
    console.log(todoTaskList);
});

// Create new modals
const mainModal = new Modal();
const projectModal = new ModalProjects();

addTask.addEventListener("click", function () {
    mainModal.openModal();
});

closeBtnModal.addEventListener("click", function () {
    mainModal.closeModal();
    form.reset();
});
