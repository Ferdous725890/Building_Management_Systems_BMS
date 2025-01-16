import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const auth = getAuth(app)



const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiospublic = useAxiosPublic()

const provider = new GoogleAuthProvider();
  const creteduser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, )
  }

  const signin = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

const updatedUserProfile = (name, photoURL) =>{
  updateProfile(auth.currentUser, {
    displayName: name, photoURL: photoURL
  })

}
const googleLogin = () =>{
  setLoading(true)
  return signInWithPopup(auth, provider)
}

  useEffect(()=>{
    const unsubCribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log(currentUser, 'current user ');
        if(currentUser){
          //get token sotore in client site
          const userinfo = {
            email: currentUser.email
          }
          console.log(userinfo,'userinfo');
          axiospublic.post('/jwt', userinfo )
          .then(res =>{
            console.log(res.data);
            if(res.data.token){
       console.log(res.data.token)
              localStorage.setItem('access-token', res.data.token);
            }
          })
        }else{
          //remove token (if token store in the client site)
          localStorage.removeItem('access-token')

        }
        setLoading(false)
    })
    return () =>{
        return unsubCribe
    }
  },[])


  const authInfo = {
    user,
    loading,
    creteduser,
    signin,
    logOut,
    updatedUserProfile,
    googleLogin

  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
