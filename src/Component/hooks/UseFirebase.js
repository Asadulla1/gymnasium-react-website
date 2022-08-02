import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initializeAuthentication from "../FireBase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribed;
  }, []);
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && isPasswordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      //console.log(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
          const newUserInfo = { ...user };
          newUserInfo.error = " ";
          newUserInfo.success = true;
          setUser(newUserInfo);
          return updateUserName(newUserInfo.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          // console.log(errorCode, errorMessage);
          // ..
        });
    }
    const updateUserName = (name) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const newUserInfo = { ...user };
          newUserInfo.error = " ";
          newUserInfo.success = true;
          setUser(newUserInfo);

          console.log("signed in user info:", userCredential.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
  };
  return {
    signInUsingGoogle,
    user,
    logOut,
    handleBlur,
    handleSubmit,
    newUser,
    setNewUser,
  };
};
export default useFirebase;
