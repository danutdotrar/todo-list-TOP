const addProject = document.getElementById("add-project");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const form = document.getElementById("form-container");

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

// Cream un proiect (obiect) care va contine o lista (obiect) care va contine un todo task (obiect)

// Cream todo task object
// Ii vom da push in lista de obiecte
class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// Update
class TodoList {
    constructor() {
        this.todoTaskList = [];
    }
}

// Modal class
class Modal {
    constructor() {}

    openModal() {
        modal.classList.remove("hidden");
    }

    closeModal() {
        modal.classList.add("hidden");
    }
}

class ModalProjects {
    constructor() {}

    openProjectModal() {
        modalAddProject.projectModal.classList.remove("hidden");
    }

    closeProjectModal() {
        modalAddProject.projectModal.classList.add("hidden");
    }
}

const mainModal = new Modal();

addTask.addEventListener("click", function () {
    mainModal.openModal();
});

closeBtnModal.addEventListener("click", function () {
    mainModal.closeModal();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("merege");

    mainModal.closeModal();
    form.reset();
});
