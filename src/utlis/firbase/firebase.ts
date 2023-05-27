import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALXgDt-betBN82MV0urqZDrqKxMVoO6gc",
  authDomain: "cloating-db.firebaseapp.com",
  projectId: "cloating-db",
  storageBucket: "cloating-db.appspot.com",
  messagingSenderId: "861789099402",
  appId: "1:861789099402:web:87ff57a60aa93315e0a473",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any,addinitionalInfo:any) => {
    if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  //if user data dosnt exsist
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addinitionalInfo
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
