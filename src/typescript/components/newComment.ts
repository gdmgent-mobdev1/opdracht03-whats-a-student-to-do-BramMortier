import { createComment, createReply } from "../firebase/database/comments";
import { notEmpty } from "../lib/validation";
import { newCommentForm } from "../lib/constants";

export const addComment = async (e: Event): Promise<void> => {
    e.preventDefault();

    const content: string = newCommentForm.content.value;

    if (notEmpty(content)) {
        createComment({
            author: sessionStorage.getItem("username") as string,
            content: content,
            projectId: sessionStorage.getItem("currentProjectId") as string,
        });
    }

    newCommentForm.reset();
};

export const addReply = async (e: Event): Promise<void> => {
    e.preventDefault();

    const targetForm = e.target as HTMLFormElement;
    const content: string = targetForm.content.value;
    const commentId = targetForm.parentElement?.parentElement?.getAttribute("data-id") as string;

    if (notEmpty(content)) {
        createReply(commentId, {
            author: sessionStorage.getItem("username") as string,
            content: content,
        });
    }

    targetForm.reset();
};
