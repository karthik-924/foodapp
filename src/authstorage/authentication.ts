// import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { auth } from './firebaseinit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { browserLocalPersistence } from 'firebase/auth';

export const register = async (username:string,email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(userCredential);
        if (userCredential) return userCredential.user.uid;
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const loginwithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (userCredential) return userCredential.user.uid;
        return false;
    } catch (error) {
        console.error(error);
    }
}

export const loginwithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        // console.log(provider,auth);
        const result = await signInWithPopup(auth, provider);
        // console.log(result);
        if (result) return result.user.uid;
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const logout = async () => {
    try {
        localStorage.removeItem('uid');
        await auth.signOut();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}