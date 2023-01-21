// ------------------------------------------- //
// module imports
import {
    addDoc,
    collection,
    DocumentData,
    onSnapshot,
    QuerySnapshot,
    QueryDocumentSnapshot,
    Timestamp,
    getDoc,
    doc,
    DocumentSnapshot,
    CollectionReference,
    Query,
    query,
    where,
    updateDoc,
    deleteDoc,
    getDocs,
    getCountFromServer,
    AggregateQuerySnapshot,
} from "firebase/firestore";
import { checkEmptyProjectList, countProjects, renderProjectCard } from "../../components/project";
import { dashboardTaskList, projectsList } from "../../lib/constants";
import { db } from "./database";
import { getProjectTasks } from "./tasks";
// ------------------------------------------- //

export type Project = {
    title: string;
    deadline: Timestamp;
    description: string;
    members: string[];
    taskOverview: number[];
};

export const createProject = async (data: Project): Promise<void> => {
    await addDoc(collection(db, "projects"), data);
};

export const updateProject = async (id: string, data: any): Promise<void> => {
    await updateDoc(doc(db, "projects", id), data);
};

export const deleteProject = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "projects", id));

    const tasksRef: CollectionReference<DocumentData> = collection(db, "tasks");
    const stmt: Query<DocumentData> = query(tasksRef, where("projectId", "==", id));

    const matchingTasks: QuerySnapshot<DocumentData> = await getDocs(stmt);
    matchingTasks.forEach(async (task: QueryDocumentSnapshot<DocumentData>): Promise<void> => {
        await deleteDoc(doc(db, "tasks", task.id));
    });
};

export const getProjects = async (userId: string, render: boolean): Promise<void> => {
    const projectsRef: CollectionReference<DocumentData> = collection(db, "projects");
    const stmt: Query<DocumentData> = query(projectsRef, where("members", "array-contains", userId));
    let projectCount: AggregateQuerySnapshot<DocumentData>;

    if (render) projectCount = await getCountFromServer(stmt);

    onSnapshot(stmt, (projects: QuerySnapshot<DocumentData>) => {
        if (!render) {
            dashboardTaskList.innerHTML = "";

            projects.forEach((project: QueryDocumentSnapshot<DocumentData>) => {
                getProjectTasks(project.id, true, "normal");
            });
        }

        if (render) {
            projectsList.innerHTML = "";

            projects.forEach((project: QueryDocumentSnapshot<DocumentData>) => {
                renderProjectCard(project.id, project.data());
            });

            countProjects(projectCount.data().count);
            checkEmptyProjectList();
        }
    });
};

export const getProject = async (id: string): Promise<DocumentData> => {
    const snapshot: DocumentSnapshot<DocumentData> = await getDoc(doc(db, "projects", id));
    return snapshot.data() as DocumentData;
};
