import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore/lite';
import { app } from '../firebase/firebase';
const db = getFirestore(app);

export const getUser = async (uid) => {
    const ref = doc(db, 'users', uid);
    const userData = await getDoc(ref);
    return userData
};

export const postUser = async (uid) => {
    return await setDoc(doc(db, 'users', uid), {
        points: 0,
      });
}