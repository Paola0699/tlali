import { app } from "@/firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
const db = getFirestore(app);

export const getAllUsers = async () => {
  const usersCollection = collection(db, "users");
  try {
    const querySnapshot = await getDocs(usersCollection);
    let users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    users.forEach(async (user) => {
      const querySnapshot = await getDocs(
        collection(db, "users", user.id, "plan_alimentacion")
      );
      if (querySnapshot._docs.length > 0) {
        user.plan_alimentacion = querySnapshot._docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      }
    });
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error getting users: ", error);
    throw error;
  }
};
