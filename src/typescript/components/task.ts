// ------------------------------------------- //
// module imports
import { DocumentData, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { getTask, getTaskNotes } from "../firebase/database/tasks";
import {
    completedTaskList,
    dashboardTaskList,
    inProgressTaskList,
    newTaskForm,
    newTaskModal,
    taskInfo,
    taskPage,
    todoTaskList,
} from "../lib/constants";
import { navigate, openModal } from "../lib/router";
import { updateTaskOverview } from "./project";
// ------------------------------------------- //

export const renderProjectTaskList = (taskList: QuerySnapshot<DocumentData>): void => {
    todoTaskList.innerHTML = "";
    inProgressTaskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    taskList.forEach((task: DocumentSnapshot<DocumentData>): void => {
        const data = task.data() as DocumentData;

        if (data.progressLabel === "To do") {
            renderTaskCardMinified(task.id, data, todoTaskList);
        } else if (data.progressLabel == "In progress") {
            renderTaskCardMinified(task.id, data, inProgressTaskList);
        } else {
            renderTaskCardMinified(task.id, data, completedTaskList);
        }
    });

    updateTaskOverview();
    checkEmptyLists();
};

export const renderTaskList = (taskList: QuerySnapshot<DocumentData>): void => {
    taskList.forEach((task: DocumentSnapshot<DocumentData>): void => {
        const data = task.data() as DocumentData;

        renderTaskCard(task.id, data);
    });
};

export const renderTaskCard = (id: string, data: any): void => {
    const taskCardEl: HTMLElement = document.createElement("li");
    taskCardEl.classList.add("dashboard__task");

    taskCardEl.innerHTML = `
        <h4 class="mb-xs text-lg">${data.taskname}</h4>
        <p class="text-sm text-subtle mb-lg">${data.description}</p>
        <div class="dashboard__task-info">
            <div class="dashboard__task-infopiece">
                <img src="/icons/pencil.svg" alt="pencil icon" />
                <span class="text-orange">${data.notesCount}</span>
            </div>
            <div class="dashboard__task-infopiece">
                <img src="/icons/timer.svg" alt="pencil icon" />
                <span class="text-orange">${data.timeEstimate}</span>
            </div>
        </div>
        <div class="text-sm dashboard__task-progress dashboard__task-progress--${getLabel(data.progressLabel)}">${data.progressLabel}</div>
    `;

    taskCardEl.addEventListener("click", async (): Promise<void> => {
        const taskData = await getTask(id);

        sessionStorage.setItem("currentTaskId", id);
        sessionStorage.setItem("currentTaskData", JSON.stringify(data));

        renderTaskInfo(taskData);
        getTaskNotes(id);
        navigate(taskPage);
    });

    dashboardTaskList.appendChild(taskCardEl);
};

export const renderTaskCardMinified = (id: string, data: any, destination: HTMLElement): void => {
    const taskCardMinifiedEl: HTMLElement = document.createElement("li");
    taskCardMinifiedEl.classList.add("project__task");
    taskCardMinifiedEl.setAttribute("draggable", "true");
    taskCardMinifiedEl.setAttribute("data-id", id);

    taskCardMinifiedEl.innerHTML = `
        <p class="bold">${data.taskname}</p>
        <div class="project__task-progress project__task-progress--${getLabel(data.progressLabel)}">${data.progressLabel}</div>
    `;

    taskCardMinifiedEl.addEventListener("click", async (): Promise<void> => {
        const taskData = await getTask(id);

        sessionStorage.setItem("currentTaskId", id);
        sessionStorage.setItem("currentTaskData", JSON.stringify(data));

        renderTaskInfo(taskData);
        getTaskNotes(id);
        navigate(taskPage);
    });

    taskCardMinifiedEl.addEventListener("dragstart", (): void => {
        taskCardMinifiedEl.classList.add("project__task--dragging");
    });

    taskCardMinifiedEl.addEventListener("dragend", (): void => {
        taskCardMinifiedEl.classList.remove("project__task--dragging");
    });

    destination.appendChild(taskCardMinifiedEl);
};

export const renderTaskInfo = (data: any): void => {
    taskInfo.innerHTML = `
        <h3 class="text-xl mb-md">${data.taskname}</h3>
        <h4 class="mb-sm">Description</h4>
        <p class="text-subtle mb-md text-sm">${data.description}</p>
        <h4 class="mb-sm">Task Progress</h4>
        <div class="task__progress">
            <div class="task__progress-option ${data.progressLabel === "To do" ? "task__progress-option--selected" : ""}">To do</div>
            <div class="task__progress-option ${data.progressLabel === "In progress" ? "task__progress-option--selected" : ""}">In progress</div>
            <div class="task__progress-option ${data.progressLabel === "Completed" ? "task__progress-option--selected" : ""}">Complete</div>
        </div>
    `;
};

export const updateTaskForm = async (data: any): Promise<void> => {
    data = JSON.parse(data);

    console.log(data);

    newTaskForm.taskName.value = data.taskname;
    newTaskForm.description.value = data.description;
    newTaskForm.estimate.value = data.timeEstimate == "No estimate" ? "" : data.timeEstimate;

    newTaskForm.setAttribute("data-update", "true");
};

export const getLabel = (progressState: string): string => {
    return progressState.split(" ").join("-").toLocaleLowerCase();
};

export const checkEmptyLists = () => {
    if (todoTaskList.innerHTML === "") {
        renderPlaceholder("Todo", todoTaskList);
    }
    if (inProgressTaskList.innerHTML === "") {
        renderPlaceholder("In Progress", inProgressTaskList);
    }
    if (completedTaskList.innerHTML === "") {
        renderPlaceholder("Completed", completedTaskList);
    }
};

export const renderPlaceholder = (type: string, destination: HTMLElement): void => {
    const placeholderEl: HTMLElement = document.createElement("div");
    placeholderEl.classList.add("project__tasks-list-placeholder");

    placeholderEl.innerHTML = `
        <span class="text-white bold">Add ${type}</span>
        <img src="/icons/plus-blue.svg" alt="plus icon" />
    `;

    placeholderEl.addEventListener("click", (): void => {
        openModal(newTaskModal);
    });

    destination.appendChild(placeholderEl);
};

[todoTaskList, inProgressTaskList, completedTaskList].forEach((list: HTMLElement): void => {
    list.addEventListener("dragover", (e: Event): void => {
        e.preventDefault();
        const draggable = document.querySelector(".project__task--dragging") as HTMLElement;

        list.appendChild(draggable);
        checkEmptyLists();
    });
});
