// ------------------------------------------- //
// module imports
import { db } from "./database";
import {
    setDoc,
    doc,
    Timestamp,
    getDoc,
    collection,
    where,
    query,
    Query,
    DocumentData,
    limit,
    getDocs,
    QuerySnapshot,
    CollectionReference,
} from "firebase/firestore";
// ------------------------------------------- //

export type User = {
    userId: string;
    username: string;
    createdAt: Timestamp;
};

export const createUser = async (data: User): Promise<void> => {
    await setDoc(doc(db, "users", data.userId), {
        username: data.username,
        createdAt: data.createdAt,
    });
};

export const getUser = async (userId: string): Promise<DocumentData> => {
    const snapshot = await getDoc(doc(db, "users", userId));
    return snapshot.data() as DocumentData;
};

export const checkMember = async (member: string): Promise<string | boolean> => {
    const usersRef: CollectionReference<DocumentData> = collection(db, "users");
    const stmt: Query<DocumentData> = query(usersRef, where("username", "==", member), limit(1));

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(stmt);

    if (querySnapshot.empty) return false;
    return querySnapshot.docs[0].id;
};
