import { app } from "@/firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
const db = getFirestore(app);

export const getAllUsers = async () => {
    const usersCollection = collection(db, 'users');
    try {
        const querySnapshot = await getDocs(usersCollection);
        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return users;
    } catch (error) {
        console.error("Error getting users: ", error);
        throw error;
    }
};
