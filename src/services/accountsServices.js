import { app } from "@/firebase/firebase";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore/lite";
const db = getFirestore(app);

export const getAllAccounts = async () => {
    const accountsCollection = collection(db, "admin");
    try {
      const querySnapshot = await getDocs(accountsCollection);
      const accounts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return accounts;
    } catch (error) {
      console.error("Error getting accounts: ", error);
      throw error;
    }
  };

  export const postAdminAccount = async (uid, adminData) => {
    return await setDoc(doc(db, "admin", uid), adminData);
  };