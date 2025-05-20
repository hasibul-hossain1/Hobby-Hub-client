import { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase/firebase.init";
import { UserContext } from "./UserContext";


function FirebaseContextProvider({ children }) {
    const [user,setUser]=useState({
        userData:null,
        userIsLoading:true,
        userIsError:false,
        userErrorMessage:null
    })
  
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, () => {
      setUser((prev) => {
        return { ...prev,userIsError:false, userData: auth.currentUser,userIsLoading:false };
      })
    })
    return () => {
        Unsubscribe();
    };
}, []);

  
  return <UserContext value={[user,setUser]}>{children}</UserContext>;
}

export default FirebaseContextProvider;
