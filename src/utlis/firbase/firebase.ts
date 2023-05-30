import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
  
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any[]) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionReference, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  try {
    await batch.commit();
    console.log("Documents added successfully");
  } catch (error) {
    console.error("Error adding documents:", error);
  }
}

export const getCategoriesAndDocs = async () => {
  const collectioRef = collection(db,'categories');
  const q = query(collectioRef);

  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc: any, docSnap) => {
    const { title, items } = docSnap.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

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
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser =async() => await signOut(auth);

export const onAuhStateChangedListener = (callback:any) => onAuthStateChanged(auth,callback);