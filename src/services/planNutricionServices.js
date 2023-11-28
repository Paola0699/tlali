import { app } from "@/firebase/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const db = getFirestore(app);

export const postPlanNutricion = async (uid, planData) => {
  const planCollection = collection(db, "users", uid, "plan_alimentacion");
  return await addDoc(planCollection, planData);
};

export const putPlanNutricion = async (uid, planId, updatedPlanData) => {
  console.log(uid, planId, updatedPlanData);
  try {
    const userDocRef = doc(db, "users", uid);
    const planAlimentacionCollectionRef = collection(
      userDocRef,
      "plan_alimentacion"
    );
    await updateDoc(
      doc(planAlimentacionCollectionRef, planId),
      updatedPlanData
    );
    return "Documento actualizado correctamente"; // O cualquier otro mensaje de éxito
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserPlan = async (uid) => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "users", uid, "plan_alimentacion")
    );
    const planRequests = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return planRequests;
  } catch (error) {
    throw error;
  }
};

export const getUserPlanRequests = async () => {
  const requestsCollection = collection(db, 'requests');
  try {
      const q = query(requestsCollection, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const nutritionPlanRequests = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
      }));
      return nutritionPlanRequests;
  } catch (error) {
      console.error("Error getting all chef requests: ", error);
      throw error;
  }
};
