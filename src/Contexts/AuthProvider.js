import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // for sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // for sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // for auth observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubcribe();
  }, []);
  const authInfo = { createUser, signIn, logOut, user, updateUser, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
