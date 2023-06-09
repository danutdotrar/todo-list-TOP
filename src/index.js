import { Modal, ModalProjects } from "./modules/modals";

const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const form = document.getElementById("form-container");
const contentDiv = document.getElementById("content");
const projectName = document.getElementById("project-name");
const taskName = document.getElementById("task-name");
const datePicker = document.getElementById("date-picker");
const priorityLevel = document.getElementById("objects");
const addTaskModal = document.getElementById("submit-task");
const closeBtnModal = document.getElementById("close-btn");
const modalProject = document.getElementById("modal-project-container");
const projectList = document.getElementById("project-list");
const projectTitle = document.getElementById("title");
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

// Create a new project name
let project1 = new Project("1 test project");

// Add tasks to project1
project1.addTask("1 Task test for project 1", "15/1/2021", "high");

// Add project1 to myProjectList
myProjectList.addProject(project1);

// Init project
function initTasks() {
    for (let i = 0; i < myProjectList.projects.length; i++) {
        let tasks2 = myProjectList.projects[i].tasks;

        let content = "";

        // Iterate over tasks
        for (let j = 0; j < tasks2.length; j++) {
            // Create content for each task
            content += `<div class="todo-task" id="todo-task" data-todoid=${j}>
                            <div class="left-part">
                                <input type="checkbox" id="check-box" name="" />
                                <div class="todo-task-name" id="todo-task-name">
                                    ${tasks2[j].title}
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

        // Set project main title
        projectTitle.innerText = myProjectList.projects[i].name;
        taskList.innerHTML = content;
    }
}

// Render the new tasks
function renderTasks(array, task, priority) {
    for (let i in array) {
        taskContent = `<div class="todo-task" id="todo-task" data-todoid=${i}>
        <div class="left-part">
            <input type="checkbox" id="check-box" name="" />
            <div class="todo-task-name" id="todo-task-name">
                ${task}
            </div>
        </div>

        <div class="right-part">
            <div class="priority-level" id="priority-level">
                ${priority}
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

// Create HTML elements for each project and add them to the project list
function renderProjects() {
    // Hold the HTML content for the task list
    // Iterate over each project in myProjectList
    for (let i = 0; i < myProjectList.projects.length; i++) {
        // Create project div
        let projectElement = document.createElement("div");
        projectElement.innerText = myProjectList.projects[i].name;
        projectElement.className = "todo project-task";

        // Append projectElement to the Projects list
        projectList.appendChild(projectElement);

        // Add an event listener to the project element to show the tasks for the clicked project
        projectElement.addEventListener("click", function () {
            // Get the list of tasks for the clicked project
            let tasks = myProjectList.projects[i].tasks;
            let content = "";

            // Iterate over tasks
            for (let j = 0; j < tasks.length; j++) {
                // Create content for each task
                content += `<div class="todo-task" id="todo-task" data-todoid=${[
                    j,
                ]}>
                            <div class="left-part">
                                <input type="checkbox" id="check-box" name="" />
                                <div class="todo-task-name" id="todo-task-name">
                                    ${tasks[j].title}
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

            // Set project main title
            projectTitle.innerText = myProjectList.projects[i].name;
            taskList.innerHTML = content;
        });
    }
}

// Check or delete the task
// Use event delegation - add event listener to the parent element
function checkOrDelete(e) {
    // if the target matches the div that we want, do stuff

    if (e.target.matches("#check-box")) {
        const currentDiv = e.target.closest(".todo-task");
        currentDiv.classList.toggle("done");
    }

    if (e.target.matches("#delete-task")) {
        const currentDivForDelete = e.target.closest(".todo-task");
        currentDivForDelete.classList.toggle("delete");
    }
}

// Init app
renderProjects();
initTasks();

// Event listeners
// FORM
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const projectIndex = myProjectList.projects.findIndex(
        (project) => project.name === projectTitle.innerText
    );

    myProjectList.projects[projectIndex].addTask(
        taskName.value,
        datePicker.value,
        priorityLevel.value
    );

    renderTasks(myProjectList.projects, taskName.value, priorityLevel.value);

    taskList.insertAdjacentHTML("beforeend", taskContent);
    mainModal.closeModal();
    form.reset();
    console.log(myProjectList);
});

// Add project and project name
addProject.addEventListener("click", function () {
    projectModal.openProjectModal();
});

addProjectName.addEventListener("click", function () {
    // Add new project to myProjectList
    let project = new Project(projectName.value);

    if (projectName.value !== "") {
        myProjectList.addProject(project);

        projectModal.closeProjectModal();
    }

    console.log(project);

    // Close the modal
    projectList.innerHTML = "";

    renderProjects();

    // Clear the modal
    projectName.value = "";
});

// check div
taskList.addEventListener("click", checkOrDelete);

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
