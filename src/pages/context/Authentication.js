import React, { createContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebaseConfig';

const auth = getAuth(app);

export const AuthenticationContext = createContext();

function Authentication({ children }) {
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   on auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   sign up new users
  const signup = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update a users profile
  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   sign in existing users
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google
  const googleSignin = () => {
    setLoader(true);
    return signInWithPopup(auth, google);
  };

  //   github
  const githubSignin = () => {
    setLoader(true);
    return signInWithPopup(auth, github);
  };

  //   signout
  const signout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loader,
    signup,
    profile,
    login,
    googleSignin,
    githubSignin,
    signout,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default Authentication;
