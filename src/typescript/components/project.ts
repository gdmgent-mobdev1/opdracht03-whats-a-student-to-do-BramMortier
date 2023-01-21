// ------------------------------------------- //
// module imports
import { DocumentData, Timestamp } from "firebase/firestore";
import { getComments } from "../firebase/database/comments";
import { getProject, updateProject } from "../firebase/database/projects";
import { getProjectTasks } from "../firebase/database/tasks";
import { getUser } from "../firebase/database/users";
import {
    completedProjectsCount,
    completedTaskList,
    inProgressProjectsCount,
    inProgressTaskList,
    newProjectCollaboratorsList,
    newProjectForm,
    newProjectModal,
    projectInfo,
    projectPage,
    projectsList,
    todoTaskList,
} from "../lib/constants";
import { timestampToDate, timestampToDayMonthYear } from "../lib/dateFormatting";
import { navigate, openModal } from "../lib/router";
import { addCollaborator } from "./newProject";
// ------------------------------------------- //

export const renderProjectCard = (id: string, data: any): void => {
    let projectCardEl: HTMLElement = document.createElement("li");
    projectCardEl.classList.add("projects__project");
    projectCardEl.setAttribute("data-id", id);

    projectCardEl.innerHTML = `
        <div class="projects__project-header mb-xs">
            <h3 class="text-xl">${data.title}</h3>
            <div class="projects__project-deadline">
                <img src="/icons/calendar.svg" alt="calender icon" />
                <span class="text-orange bold">${timestampToDate(data.deadline)}</span>
            </div>
        </div>

        <p class="text-sm text-subtle mb-md">
            ${data.description} <br />
            <span class="bold text-blue"> read more </span>
        </p>

        <h4 class="mb-xs">Project members</h4>
        <div class="projects__members-info mb-xs">
            <ul class="projects__members-list">
                ${renderMembersList(data.members, "small")}
            </ul>
            <span>${data.members.length > 4 ? `${data.members.length - 4}+` : ""}</span>
        </div>

        <div class="projects__progress-info mb-sm">
            <div class="projects__progress-header mb-xs">
                <h4 class="regular">Project progression</h4>
                <span id="completion-percentage" class="bold">${updateProjectProgress(data.taskOverview)}%</span>
            </div>
            <div class="projects__progress-bar">
                <span style="width: ${updateProjectProgress(data.taskOverview)}%" class="projects__progress-bar-value"></span>
            </div>
        </div>

        <div class="projects__task-overview">
            <span class="projects__task projects__task--todo">${data.taskOverview[0]}</span>
            <span class="projects__task projects__task--in-progress">${data.taskOverview[1]}</span>
            <span class="projects__task projects__task--completed">${data.taskOverview[2]}</span>
        </div>
    `;

    projectCardEl.addEventListener("click", async (): Promise<void> => {
        const projectData: DocumentData = await getProject(id);

        sessionStorage.setItem("currentProjectId", id);
        sessionStorage.setItem("currentProjectData", JSON.stringify(data));

        renderProjectInfo(projectData);
        getProjectTasks(id, true, "small");
        getComments(id);
        navigate(projectPage);
    });

    projectsList.appendChild(projectCardEl);
};

export const renderProjectInfo = (data: any): void => {
    projectInfo.innerHTML = `
        <div class="project__general-header mb-md">
            <h3 class="text-xl">${data.title}</h3>
            <div class="project__deadline">
                <img src="/icons/calendar.svg" alt="calendar icon" />
                <span class="text-orange bold">${timestampToDate(data.deadline)}</span>
            </div>
        </div>

        <h4 class="mb-xs">Description</h4>
        <p class="text-sm text-subtle mb-md">${data.description}</p>

        <h4 class="mb-xs">Members</h4>
        <div class="project__members-info">
            <ul id="project-members-list" class="project__members-list">
                ${renderMembersList(data.members, "large")}
                <li class="project__add-member">
                    <img src="/icons/plus.svg" alt="plus icon" />
                </li>
            </ul>
            <span>${data.members.length > 4 ? `${data.members.length - 4}+` : ""}</span>
        </div>
    `;

    const projectMembersList = projectInfo.querySelector("#project-members-list") as HTMLElement;

    projectMembersList.addEventListener("click", (): void => {
        updateProjectForm(sessionStorage.getItem("currentProjectData") as string);
        openModal(newProjectModal);
    });
};

export const updateProjectForm = async (data: any): Promise<void> => {
    data = JSON.parse(data);

    const memberUsernames = data.members.map(async (id: string): Promise<void> => {
        const res: DocumentData = await getUser(id);
        return res.username;
    });

    const usernameArr = await Promise.all(memberUsernames);

    newProjectCollaboratorsList.innerHTML = "";
    usernameArr.forEach((username: string): void => {
        addCollaborator(username);
    });

    newProjectForm.projectName.value = data.title;
    newProjectForm.description.value = data.description;

    const deadline: string[] = timestampToDayMonthYear(new Timestamp(data.deadline.seconds, data.deadline.nanoseconds));

    newProjectForm.day.value = deadline[0];
    newProjectForm.month.value = deadline[1];
    newProjectForm.year.value = deadline[2];

    newProjectForm.setAttribute("data-update", "true");
};

export const renderMembersList = (membersList: string[], size: string): string => {
    let memberElList: string[] = [];

    membersList.forEach((): void => {
        memberElList.push(`<li class="project${size == "small" ? "s" : ""}__member"></li>`);
    });
    return memberElList.join("");
};

export const updateProjectProgress = (tasks: number[]): number => {
    if (tasks.every((task) => task == 0)) return 0;
    return Math.floor((tasks[2] / tasks.reduce((a: number, b: number): number => a + b)) * 100);
};

export const checkEmptyProjectList = (): void => {
    const placeholderEl: HTMLElement = document.createElement("div");
    placeholderEl.classList.add("projects__empty-list-placeholder", "center");

    placeholderEl.innerHTML = `
        <p class="mb-xxs bold text-lg">0 Results</p>
        <p class="text-subtle text-sm">Seems that you haven't completed any projects yet</p>
    `;

    const projects = Array.from(projectsList.children) as HTMLElement[];
    const isEmpty: boolean = projects.every((project: HTMLElement) => project.classList.contains("projects__project--hidden"));

    if (isEmpty) {
        projectsList.appendChild(placeholderEl);
    } else {
        const placeholderEl = document.querySelector(".projects__empty-list-placeholder") as HTMLElement;
        if (placeholderEl) projectsList.removeChild(placeholderEl);
    }
};

export const countProjects = (totalProjects: any): void => {
    const inProgressProjects = projectsList.children.length;

    inProgressProjectsCount.innerText = `${inProgressProjects}`;
    completedProjectsCount.innerText = `${inProgressProjects - totalProjects}`;
};

export const updateTaskOverview = (): void => {
    const overviewArray = [todoTaskList.children.length, inProgressTaskList.children.length, completedTaskList.children.length];

    updateProject(sessionStorage.getItem("currentProjectId") as string, {
        taskOverview: overviewArray,
    });
};
