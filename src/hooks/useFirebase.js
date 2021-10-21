
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();
const auth = getAuth();

const useFirebase = () => {
    const userData = useContext(UserContext);

    if(userData) {
        const {setIsLoggedIn} = userData;
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setIsLoggedIn(true);
            } else {
              // User is signed out
              // ...
            }
          });
    }
    
};

export default useFirebase;