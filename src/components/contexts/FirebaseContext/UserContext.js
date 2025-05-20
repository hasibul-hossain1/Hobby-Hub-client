import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../../../../firebase/firebase.init";



export const UserContext=createContext({
    userData:null,
    userIsLoading:true,
    userIsError:false,
    userErrorMessage:null
})
export const useUserContext=()=>{
    return useContext(UserContext)
}

export const createUserWithGoogle=()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}
export const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
export const updateProfileUser=(obj)=>{
    return updateProfile(auth.currentUser,obj)
}
export const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const signOUtUser=()=>{
    return signOut(auth)
}
export const  resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
}