// ------------------------------------------- //
// module imports
import {
    newProjectCollaboratorsList,
    newProjectForm,
    newProjectFormErrors,
    newProjectSuccesMessage,
    projectDeletionMessage,
    projectsPage,
} from "../lib/constants";
import { createProject, getProjects, updateProject } from "../firebase/database/projects";
import { notEmpty } from "../lib/validation";
import { dayMonthYearToTimestamp } from "../lib/dateFormatting";
import { closeModal, navigate } from "../lib/router";
import { convertInputsToArray } from "../lib/helper";
import { checkMember } from "../firebase/database/users";
// ------------------------------------------- //

export const addProject = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let projectName: string = newProjectForm.projectName.value;
    let description: string = newProjectForm.description.value;

    let members: string[] = convertInputsToArray("collaborators[]");

    let day: number = newProjectForm.day.value;
    let month: number = newProjectForm.month.value;
    let year: number = newProjectForm.year.value;

    const memberChecks = members.map(async (member: string): Promise<string | boolean> => {
        return await checkMember(member);
    });

    const checkResults = await Promise.all(memberChecks);

    checkResults.forEach((checkResult: string | boolean, index: number) => {
        if (checkResult !== false) {
            members[index] = checkResult as string;
        } else {
            errorArr.push("One or more invalid collaborators");
        }
    });

    if (!notEmpty(projectName)) errorArr.push("A title for your project is required");

    if (errorArr.length === 0) {
        try {
            newProjectFormErrors.innerHTML = "";
            newProjectFormErrors.classList.remove("form__errors--active");

            if (newProjectForm.getAttribute("data-update") === "true") {
                updateProject(sessionStorage.getItem("currentProjectId") as string, {
                    title: projectName,
                    deadline: dayMonthYearToTimestamp(day, month, year),
                    description: description,
                    members: members,
                });
            } else {
                createProject({
                    title: projectName,
                    deadline: dayMonthYearToTimestamp(day, month, year),
                    description: description,
                    members: members,
                    taskOverview: [0, 0, 0],
                });
            }

            newProjectForm.setAttribute("data-update", "false");

            newProjectForm.reset();
            showSuccesMessage();

            setTimeout(() => {
                closeModal();
                getProjects(sessionStorage.getItem("userId") as string, true);
                navigate(projectsPage);
            }, 800);
        } catch (error) {
            showErrors(newProjectFormErrors, errorArr);
        }
    } else {
        showErrors(newProjectFormErrors, errorArr);
    }
};

export const addCollaborator = (collaboratorName?: string): void => {
    const collaboratorEl: HTMLElement = document.createElement("li");
    collaboratorEl.classList.add("new-project__collaborator");

    collaboratorEl.innerHTML = `
        <div class="new-project__collaborator-icon"></div>
        <input type="text" class="form__input" placeholder="Collaborator name" name="collaborators[]" value="${
            collaboratorName ? collaboratorName : ""
        }"/>
        <button class="icon-btn icon-btn--secondary icon-btn--close">
            <img src="/icons/plus.svg" alt="close icon" />
        </button>
    `;

    newProjectCollaboratorsList.appendChild(collaboratorEl);

    Array.from(document.querySelectorAll(".new-project__collaborator button")).forEach((closeBtn: Element): void => {
        closeBtn.addEventListener("click", (): void => {
            closeBtn.parentElement?.remove();
        });
    });
};

export const showSuccesMessage = (): void => {
    newProjectSuccesMessage.classList.add("form__succes--active");
    setTimeout(() => {
        newProjectSuccesMessage.classList.remove("form__succes--active");
    }, 1000);
};

export const showProjectDeleteMessage = (): void => {
    projectDeletionMessage.classList.add("form__delete--active");
    setTimeout(() => {
        projectDeletionMessage.classList.remove("form__delete--active");
    }, 1000);
};

export const showErrors = (targetFormErrors: HTMLElement, errorArr: string[]): void => {
    targetFormErrors.innerHTML = "";

    errorArr.forEach((error: string): void => {
        let errEl: HTMLElement = document.createElement("span");
        errEl.classList.add("error", "text-sm");
        errEl.innerText = error;
        targetFormErrors.appendChild(errEl);
    });

    newProjectFormErrors.classList.add("form__errors--active");
};
