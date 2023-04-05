const addProject = document.getElementById("add-project");

// Modal
const modal = document.getElementById("modal");
const projectName = document.getElementById("project-name");
const taskName = document.getElementById("task-name");
const datePicker = document.getElementById("date-picker");
const priorityLevel = document.getElementById("objects");
const addTaskModal = document.getElementById("submit-task");
const closeBtnModal = document.getElementById("close");

// When add project is pressed the modal opens
// Insert project name, task name, date and priority in the modal (take the values)
// When modal's button 'add task' is pressed, modal closes and the values from the form are inputted in the new task from the project content
// The 'project name' will be added in the sidebar, this would be a div button
// If 'project name' is clicked, then it will show the current project with the current tasks
