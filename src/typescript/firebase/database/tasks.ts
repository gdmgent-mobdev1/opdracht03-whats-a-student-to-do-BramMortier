// ------------------------------------------- //
// module imports
import {
    addDoc,
    collection,
    CollectionReference,
    DocumentData,
    DocumentSnapshot,
    getDoc,
    doc,
    onSnapshot,
    query,
    Query,
    QuerySnapshot,
    where,
    QueryDocumentSnapshot,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { renderNote } from "../../components/note";
import { renderProjectTaskList, renderTaskList } from "../../components/task";
import { notesList } from "../../lib/constants";
import { db } from "./database";
// ------------------------------------------- //

export type Task = {
    projectId: string;
    taskname: string;
    description: string;
    progressLabel: string;
    notesCount: number;
    timeEstimate: string;
};

export type Note = {
    content: string;
};

export const createTask = async (data: Task): Promise<void> => {
    await addDoc(collection(db, "tasks"), data);
};

export const updateTask = async (id: string, data: any): Promise<void> => {
    await updateDoc(doc(db, "tasks", id), data);
};

export const deleteTask = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "tasks", id));
};

export const getProjectTasks = async (id: string, render: boolean, style: string): Promise<void> => {
    const tasksRef: CollectionReference<DocumentData> = collection(db, "tasks");
    const stmt: Query<DocumentData> = query(tasksRef, where("projectId", "==", id));

    onSnapshot(stmt, (tasks: QuerySnapshot<DocumentData>): void => {
        if (render && style === "small") {
            renderProjectTaskList(tasks);
        }
        if (render && style === "normal") {
            renderTaskList(tasks);
        }
    });
};

export const getTask = async (id: string): Promise<DocumentData> => {
    const snapshot: DocumentSnapshot<DocumentData> = await getDoc(doc(db, "tasks", id));
    return snapshot.data() as DocumentData;
};

export const createNote = async (id: string, data: Note): Promise<void> => {
    await addDoc(collection(db, `tasks/${id}/notes`), data);
};

export const getTaskNotes = async (id: string): Promise<void> => {
    const notesRef: CollectionReference<DocumentData> = collection(db, `tasks/${id}/notes`);

    onSnapshot(notesRef, (notes: QuerySnapshot<DocumentData>): void => {
        notesList.innerHTML = "";

        notes.forEach((note: QueryDocumentSnapshot<DocumentData>): void => {
            renderNote(note.id, note.data());
        });
    });
};
