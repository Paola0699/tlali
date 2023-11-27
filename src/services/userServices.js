import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  where,
  updateDoc
} from "firebase/firestore/lite";
import { app } from "../firebase/firebase";
const db = getFirestore(app);

export const getUser = async (uid) => {
  const ref = doc(db, "users", uid);
  const userData = await getDoc(ref);
  return userData.data();
};

export const postUser = async (uid, userData) => {
  return await setDoc(doc(db, "users", uid), userData);
};

export const editUserMembership = async (uid, membership) => {
  return await updateDoc(doc(db, 'users', uid), {membership: membership});
};

export const editUserNutritionPlanRequest = async (uid) => {
  const requestsRef = collection(db, "requests");
  const requestRef = doc(requestsRef);
  const id = requestRef.id;
  await setDoc(requestRef, {
    date: new Date(),
    userID: uid,
  });
  await updateDoc(doc(db, 'users', uid), {nutritionRequest: id});
  return id
};

export const editUserPoints = async (uid, points) => {
  return await updateDoc(doc(db, 'users', uid), {points: points});
};

export const getUserByPhoneNumber = async (phoneNumber) => {
  const q = query(
    collection(db, "users"),
    where("phoneNumber", "==", phoneNumber)
  );
  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      return querySnapshot.docs[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener usuario por número de teléfono:", error);
    throw error;
  }
};
