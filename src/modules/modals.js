const modalAddProject = document.getElementById("modal-project-container");
const modal = document.getElementById("modal");

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
        modalAddProject.classList.remove("hidden");
    }

    closeProjectModal() {
        modalAddProject.classList.add("hidden");
    }
}

export { Modal, ModalProjects };
