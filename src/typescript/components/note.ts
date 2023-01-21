// ------------------------------------------- //
// module imports
import { notesList } from "../lib/constants";
// ------------------------------------------- //

export const renderNote = (id: string, data: any): void => {
    const noteEl: HTMLElement = document.createElement("li");
    noteEl.classList.add("task__note");
    noteEl.setAttribute("data-id", id);

    noteEl.innerHTML = `${data.content}`;

    notesList.appendChild(noteEl);
};
