import { app } from "@/firebase/firebase";
import { collection, doc, getDocs, getFirestore, limit, orderBy, query, setDoc, where } from "firebase/firestore/lite";

const db = getFirestore(app);

export const postChefRequest = async (postData) => {
    const chefCollection = collection(db, 'chef');
    return await setDoc(doc(chefCollection), postData);
};

export const getLastChefRequest = async (userID) => {
    const chefCollection = collection(db, 'chef');
    try {
        const q = query(chefCollection, orderBy('requestDate', 'desc'), where('user','==',userID), limit(5));
        const querySnapshot = await getDocs(q);
        // Extract data from the query snapshot
        const chefRequests = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return chefRequests;
    } catch (error) {
        console.error("Error getting last five chef requests: ", error);
        throw error;
    }
};

export const getAllChefRequest = async () => {
    const chefCollection = collection(db, 'chef');
    try {
        const q = query(chefCollection, orderBy('requestDate', 'desc'));
        const querySnapshot = await getDocs(q);
        // Extract data from the query snapshot
        const chefRequests = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return chefRequests;
    } catch (error) {
        console.error("Error getting all chef requests: ", error);
        throw error;
    }
};