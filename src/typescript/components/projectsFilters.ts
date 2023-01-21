// ------------------------------------------- //
// module imports
import { projectsCompletedBtn, projectsInProgressBtn, projectsList } from "../lib/constants";
import { checkEmptyProjectList } from "./project";
// ------------------------------------------- //

export const updateProjectsFilters = (completion: string): void => {
    if (completion == "completed") {
        projectsCompletedBtn.classList.add("projects__filter-option--active");
        projectsInProgressBtn.classList.remove("projects__filter-option--active");

        filterProjects("completed");
    } else if (completion == "in progress") {
        projectsInProgressBtn.classList.add("projects__filter-option--active");
        projectsCompletedBtn.classList.remove("projects__filter-option--active");

        filterProjects("in progress");
    }

    checkEmptyProjectList();
};

export const filterProjects = (completion: string): void => {
    const projects = Array.from(projectsList.children) as HTMLElement[];

    if (!projects) return;

    projects.forEach((project: HTMLElement) => {
        const completionPercentage = project.querySelector("#completion-percentage") as HTMLElement;

        if (!completionPercentage) return;

        if (completion === "completed") {
            if (completionPercentage.innerText === "100%") {
                project.classList.remove("projects__project--hidden");
            } else {
                project.classList.add("projects__project--hidden");
            }
        } else if (completion === "in progress") {
            if (completionPercentage.innerText !== "100%") {
                project.classList.remove("projects__project--hidden");
            } else {
                project.classList.add("projects__project--hidden");
            }
        }
    });
};
