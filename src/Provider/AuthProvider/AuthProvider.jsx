import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    setLoader(true);
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("obostha ki", currentUser);
      setLoader(false);
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loader,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
