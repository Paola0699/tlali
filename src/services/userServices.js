import { getFirestore, getDoc, setDoc, doc, getDocs, query, collection, where } from 'firebase/firestore/lite';
import { app } from '../firebase/firebase';
const db = getFirestore(app);

export const getUser = async (uid) => {
    const ref = doc(db, 'users', uid);
    const userData = await getDoc(ref);
    return userData.data();
};

export const postUser = async (uid, userData) => {
    return await setDoc(doc(db, 'users', uid), userData);
}
export const getUserByPhoneNumber = async (phoneNumber) => {
    const q = query(collection(db, 'users'), where('phoneNumber', '==', phoneNumber));
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
          return querySnapshot.docs[0];
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error al obtener usuario por número de teléfono:', error);
        throw error; 
      }

  };

  