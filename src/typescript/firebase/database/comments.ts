// ------------------------------------------- //
// module imports
import {
    addDoc,
    collection,
    CollectionReference,
    DocumentData,
    onSnapshot,
    query,
    Query,
    QueryDocumentSnapshot,
    QuerySnapshot,
    where,
} from "firebase/firestore";
import { renderComment } from "../../components/comment";
import { commentsList } from "../../lib/constants";
import { db } from "./database";
// ------------------------------------------- //

export type Comment = {
    author: string;
    content: string;
    projectId: string;
};

export type Reply = {
    author: string;
    content: string;
};

export const createComment = async (data: Comment): Promise<void> => {
    await addDoc(collection(db, "comments"), data);
};

export const getComments = async (id: string): Promise<void> => {
    const commentsRef: CollectionReference<DocumentData> = collection(db, "comments");
    const stmt: Query<DocumentData> = query(commentsRef, where("projectId", "==", id));

    onSnapshot(stmt, (comments: QuerySnapshot<DocumentData>): void => {
        commentsList.innerHTML = "";

        comments.forEach((comment: QueryDocumentSnapshot<DocumentData>): void => {
            renderComment(commentsList, comment.id, comment.data());
        });
    });
};

export const createReply = async (id: string, data: Reply): Promise<void> => {
    await addDoc(collection(db, `comments/${id}/replies`), data);
};

export const getReplies = async (id: string): Promise<void> => {
    const commentRef: CollectionReference<DocumentData> = collection(db, `comments/${id}/replies`);

    onSnapshot(commentRef, (replies: QuerySnapshot<DocumentData>): void => {
        replies.forEach((reply: QueryDocumentSnapshot<DocumentData>): void => {
            renderComment(id, reply.id, reply.data());
        });
    });
};
