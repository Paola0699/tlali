import { app } from "@/firebase/firebase";
import { doc, getFirestore, setDoc, collection, getDocs, query, orderBy, limit, updateDoc, deleteDoc } from "firebase/firestore/lite";

const db = getFirestore(app);

export const postBlog = async (postData) => {
    const blogCollection = collection(db, 'blog');
    return await setDoc(doc(blogCollection), postData);
};

export const getAllBlogs = async () => {
    const blogCollection = collection(db, 'blog');
    try {
        const querySnapshot = await getDocs(blogCollection);
        const blogs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return blogs;
    } catch (error) {
        console.error("Error getting blogs: ", error);
        throw error;
    }
};

export const getLastBlogs = async () => {
    const blogCollection = collection(db, 'blog');
    try {
        const q = query(blogCollection, orderBy('date', 'desc'), limit(5));
        const querySnapshot = await getDocs(q);
        
        // Extract data from the query snapshot
        const blogs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return blogs;
    } catch (error) {
        console.error("Error getting last five blogs: ", error);
        throw error;
    }
};

export const putBlogPost = async (postId, postData) => {
    return await updateDoc(doc(db, 'blog', postId), postData);
};

export const deleteBlogPost = async (postId) => {
    return await deleteDoc(doc(db, "blog", postId));
}