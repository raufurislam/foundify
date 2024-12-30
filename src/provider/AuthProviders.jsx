import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email/password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const userLoginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // password reset
  const passwordRest = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData).then(() => {
      const updatedUser = { ...auth.currentUser, ...updatedData };
      setUser(updatedUser);
    });
  };

  // Firebase observer for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("state captured", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post(
            "https://assignment-11-server-raufur-web-10-0934.vercel.app/jwt",
            user,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log("login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://assignment-11-server-raufur-web-10-0934.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            // console.log("logout", res.data);
            setLoading(false);
          });
      }

      // put it on the right place
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    createNewUser,
    userLogin,
    passwordRest,
    userLoginGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
