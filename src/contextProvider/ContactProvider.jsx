import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthContaxt = createContext(null);

const ContaxtProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    };

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    };

    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('obser', currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, signInUser,logOut, loading}
    return ( 
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
     );
}
 
export default ContaxtProvider;