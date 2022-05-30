import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from "../FireBase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return signInUsingGoogle;
};
export default useFirebase;
