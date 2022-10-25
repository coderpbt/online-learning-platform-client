import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({children}) => {

  const [user,setUser] = useState({})
  const [loading,setLoading] = useState(true)

  //google login provider
  const googleProvider = new GoogleAuthProvider();

  //Github login provider
  const githubprovider = new GithubAuthProvider();


  //login User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
//Register User
  const sigIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
//google login Function
  const signInwithG = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //google login Function
  const signInwithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubprovider)
  }


//User LogOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  //update user profile name and picture
  const updateProfileName = profile => {
    return updateProfile(auth.currentUser, profile)
  }
  //email varification 
  const veryficitionUserEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  //Current User Stage Change
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //  if (currentUser === null || currentUser.emailVerified) {
      
    //  }
     setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unSubscribe();
    }

  },[])

  const authInfo = {user,loading,setLoading,createUser,sigIn,logOut,signInwithG,updateProfileName,veryficitionUserEmail,signInwithGithub}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;