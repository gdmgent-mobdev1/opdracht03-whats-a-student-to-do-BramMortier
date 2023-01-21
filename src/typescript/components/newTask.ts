// ------------------------------------------- //
// module imports
import { createTask, updateTask } from "../firebase/database/tasks";
import {
    newTaskChips,
    newTaskDropdown,
    newTaskDropdownList,
    newTaskDropdownOptions,
    newTaskForm,
    newTaskFormErrors,
    newTaskSuccesMessage,
    projectPage,
    taskDeletionMessage,
} from "../lib/constants";
import { closeModal, navigate } from "../lib/router";
import { notEmpty } from "../lib/validation";
// ------------------------------------------- //

export const addTask = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let taskname: string = newTaskForm.taskName.value;
    let description: string = newTaskForm.description.value;

    let progress: string = newTaskForm.progress.value;
    let estimate: string = newTaskForm.estimate.value;

    if (!notEmpty(taskname)) errorArr.push("A name for this task is required");
    if (!notEmpty(estimate)) estimate = "No estimate";

    if (errorArr.length === 0) {
        try {
            newTaskFormErrors.innerHTML = "";
            newTaskFormErrors.classList.remove("form__errors--active");

            if (newTaskForm.getAttribute("data-update") === "true") {
                updateTask(sessionStorage.getItem("currentTaskId") as string, {
                    taskname: taskname,
                    description: description,
                    timeEstimate: estimate,
                });
            } else {
                createTask({
                    projectId: sessionStorage.getItem("currentProjectId") as string,
                    taskname: taskname,
                    description: description,
                    progressLabel: progress,
                    notesCount: 0,
                    timeEstimate: estimate,
                });
            }

            newTaskForm.reset();
            showSuccesMessage();

            setTimeout(() => {
                navigate(projectPage);
                closeModal();
            }, 800);
        } catch {
            showErrors(newTaskFormErrors, errorArr);
        }
    } else {
        showErrors(newTaskFormErrors, errorArr);
    }
};

export const toggleDropdownMenu = (): void => {
    newTaskDropdownList.classList.toggle("form__dropdown-list--active");
    newTaskDropdown.classList.toggle("form__dropdown-selected--active");
};

export const handleDropdownMenu = (option: HTMLElement): void => {
    let selected = newTaskDropdown.children[1] as HTMLElement;
    let inputValue = newTaskDropdown.children[0] as HTMLInputElement;

    newTaskDropdownOptions.forEach((option: HTMLElement): void => {
        option.classList.remove("form__dropdown-option--selected");
    });

    option.classList.add("form__dropdown-option--selected");
    selected.innerText = option.innerText;
    inputValue.value = option.innerText;

    toggleDropdownMenu();
};

export const selectChip = (chip: HTMLElement): void => {
    newTaskChips.forEach((chip: HTMLElement): void => {
        chip.classList.remove("new-task__chip--selected");
    });

    newTaskForm.estimate.value = chip.innerText;

    chip.classList.add("new-task__chip--selected");
};

export const showSuccesMessage = (): void => {
    newTaskSuccesMessage.classList.add("form__succes--active");
    setTimeout(() => {
        newTaskSuccesMessage.classList.remove("form__succes--active");
    }, 1000);
};

export const showTaskDeleteMessage = (): void => {
    taskDeletionMessage.classList.add("form__delete--active");
    setTimeout(() => {
        taskDeletionMessage.classList.remove("form__delete--active");
    }, 1000);
};

export const showErrors = (targetFormErrors: HTMLElement, errorArr: string[]): void => {
    targetFormErrors.innerHTML = "";
    console.log("here");

    errorArr.forEach((error: string): void => {
        let errEl: HTMLElement = document.createElement("span");
        errEl.classList.add("error", "text-sm");
        errEl.innerText = error;
        targetFormErrors.appendChild(errEl);
    });

    newTaskFormErrors.classList.add("form__errors--active");
};
