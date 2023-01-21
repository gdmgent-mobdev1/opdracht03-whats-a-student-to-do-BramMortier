export const headers = Array.from(document.querySelectorAll(".header")) as HTMLElement[];

export const loginPage = document.getElementById("login-page") as HTMLElement;
export const signUpPage = document.getElementById("register-page") as HTMLElement;
export const dashboardPage = document.getElementById("dashboard-page") as HTMLElement;
export const projectsPage = document.getElementById("projects-page") as HTMLElement;
export const projectPage = document.getElementById("project-page") as HTMLElement;
export const taskPage = document.getElementById("task-page") as HTMLElement;

export const pages: HTMLElement[] = [loginPage, signUpPage, dashboardPage, projectPage, projectsPage, taskPage];

export const accountUsername = document.getElementById("account-username") as HTMLElement;

export const inProgressProjectsBtn = document.getElementById("in-progress-projects-btn") as HTMLElement;
export const completedProjectsBtn = document.getElementById("completed-projects-btn") as HTMLElement;

export const dashboardBackBtn = document.getElementById("dashboard-back-btn") as HTMLElement;
export const projectsBackBtn = document.getElementById("projects-back-btn") as HTMLElement;
export const projectBackBtn = document.getElementById("project-back-btn") as HTMLElement;

export const logoutBtn = document.getElementById("logout-btn") as HTMLElement;

export const newProjectBtns = Array.from(document.querySelectorAll(".new-project-btn")) as HTMLElement[];
export const newTaskBtns = Array.from(document.querySelectorAll(".new-task-btn")) as HTMLElement[];
export const newNoteBtn = document.getElementById("new-note-btn") as HTMLElement;
export const closeModalBtns = Array.from(document.querySelectorAll(".close-modal-btn")) as HTMLElement[];

export const newProjectModal = document.getElementById("new-project-overlay") as HTMLElement;
export const newTaskModal = document.getElementById("new-task-overlay") as HTMLElement;
export const newNoteModal = document.getElementById("new-note-overlay") as HTMLElement;
export const deleteProjectModal = document.getElementById("delete-project-overlay") as HTMLElement;
export const deleteTaskModal = document.getElementById("delete-task-overlay") as HTMLElement;

export const modals: HTMLElement[] = [newProjectModal, newTaskModal, newNoteModal, deleteProjectModal, deleteTaskModal];

export const tiles = Array.from(document.querySelectorAll(".tile")) as HTMLElement[];

export const loginForm = document.getElementById("login-form") as HTMLFormElement;
export const loginFormErrors = document.getElementById("login-form-errors") as HTMLElement;
export const loginFormLink = document.getElementById("login-form-link") as HTMLElement;
export const loginWithGoogleBtn = document.getElementById("google-auth-btn") as HTMLElement;

export const signUpForm = document.getElementById("signup-form") as HTMLFormElement;
export const signUpFormErrors = document.getElementById("signup-form-errors") as HTMLElement;
export const signUpFormLink = document.getElementById("signup-form-link") as HTMLElement;

export const newProjectForm = document.getElementById("new-project-form") as HTMLFormElement;
export const newProjectFormErrors = document.getElementById("new-project-form-errors") as HTMLElement;
export const newProjectSuccesMessage = document.getElementById("new-project-succes-message") as HTMLElement;
export const projectDeletionMessage = document.getElementById("project-deletion-succes-message") as HTMLElement;
export const newProjectCollaboratorsList = document.getElementById("new-project-collaborators-list") as HTMLElement;
export const addCollaboratorBtn = document.getElementById("add-collaborator-btn") as HTMLElement;
export const createProjectBtn = document.getElementById("create-project-btn") as HTMLElement;

export const newTaskForm = document.getElementById("new-task-form") as HTMLFormElement;
export const newTaskFormErrors = document.getElementById("new-task-form-errors") as HTMLElement;
export const newTaskSuccesMessage = document.getElementById("new-task-succes-message") as HTMLElement;
export const taskDeletionMessage = document.getElementById("task-deletion-succes-message") as HTMLElement;
export const newTaskDropdown = document.getElementById("new-task-dropdown") as HTMLElement;
export const newTaskDropdownList = document.getElementById("new-task-dropdown-list") as HTMLElement;
export const newTaskDropdownOptions = Array.from(document.querySelectorAll(".form__dropdown-option")) as HTMLElement[];
export const newTaskChips = Array.from(document.querySelectorAll(".new-task__chip")) as HTMLElement[];
export const createTaskBtn = document.getElementById("create-task-btn") as HTMLElement;

export const newNoteForm = document.getElementById("new-note-editor") as HTMLFormElement;
export const newNoteSuccesMessage = document.getElementById("new-note-succes-message") as HTMLElement;

export const newCommentForm = document.getElementById("new-comment-form") as HTMLFormElement;

export const markdownContent = document.getElementById("markdown-content") as HTMLInputElement;
export const markdownPreview = document.getElementById("markdown-preview") as HTMLElement;
export const headingHotkey = document.getElementById("heading-hotkey") as HTMLElement;
export const subtitleHotkey = document.getElementById("subtitle-hotkey") as HTMLElement;
export const listHotkey = document.getElementById("list-hotkey") as HTMLElement;
export const codeHotkey = document.getElementById("code-hotkey") as HTMLElement;
export const previewMardownBtn = document.getElementById("preview-markdown-btn") as HTMLElement;

export const editProjectBtn = document.getElementById("edit-project-btn") as HTMLElement;
export const deleteProjectBtn = document.getElementById("delete-project-btn") as HTMLElement;
export const editTaskBtn = document.getElementById("edit-task-btn") as HTMLElement;
export const deleteTaskBtn = document.getElementById("delete-task-btn") as HTMLElement;
export const confirmDeleteProjectBtn = document.getElementById("confirm-delete-project-btn") as HTMLElement;
export const confirmDeleteTaskBtn = document.getElementById("confirm-delete-task-btn") as HTMLElement;

export const newPasswordInput = document.getElementById("new-password-input") as HTMLInputElement;
export const passwordSecurityBars = document.getElementById("password-security-bars") as HTMLElement;

export const dashboardTaskList = document.getElementById("dashboard-task-list") as HTMLElement;

export const projectsInProgressBtn = document.getElementById("projects-in-progress-btn") as HTMLElement;
export const projectsCompletedBtn = document.getElementById("projects-completed-btn") as HTMLElement;
export const projectsList = document.getElementById("projects-list") as HTMLElement;

export const inProgressProjectsCount = document.getElementById("in-progress-projects-count") as HTMLElement;
export const completedProjectsCount = document.getElementById("completed-projects-count") as HTMLElement;

export const projectInfo = document.getElementById("project-info") as HTMLElement;
export const taskInfo = document.getElementById("task-info") as HTMLElement;

export const todoTaskList = document.getElementById("todo-task-list") as HTMLElement;
export const inProgressTaskList = document.getElementById("in-progress-task-list") as HTMLElement;
export const completedTaskList = document.getElementById("completed-task-list") as HTMLElement;

export const commentsList = document.getElementById("comments-list") as HTMLElement;

export const notesList = document.getElementById("notes-list") as HTMLElement;
