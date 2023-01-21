// ------------------------------------------- //
// module imports
import { markdownContent, markdownPreview, newNoteSuccesMessage } from "../lib/constants";
import { notEmpty } from "../lib/validation";
import { createNote } from "../firebase/database/tasks";
import { closeModal } from "../lib/router";
// ------------------------------------------- //

export const addNote = async (e: Event): Promise<void> => {
    e.preventDefault();

    let content: string = markdownPreview.innerHTML;
    let currentProject = sessionStorage.getItem("currentTaskId") as string;

    if (notEmpty(content)) {
        createNote(currentProject, {
            content: content,
        });

        markdownContent.value = "";
        showSuccesMessage();

        setTimeout(() => {
            closeModal();
        }, 800);
    } else {
        console.log("error empty field detected");
    }
};

export const showSuccesMessage = (): void => {
    newNoteSuccesMessage.classList.add("form__succes--active");
    setTimeout(() => {
        newNoteSuccesMessage.classList.remove("form__succes--active");
    }, 1000);
};
