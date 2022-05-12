import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEuwKfrG2H8aYug4Dq0dp4iSVy4ZXOcY4",
  authDomain: "crown-clothing-db-41810.firebaseapp.com",
  projectId: "crown-clothing-db-41810",
  storageBucket: "crown-clothing-db-41810.appspot.com",
  messagingSenderId: "478904774821",
  appId: "1:478904774821:web:9c1ea258b204427b0a5d4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  if (!userAuth) return;
  // Create a document reference (it's like a virtual document)
  const userDocRef = doc(db, "users", userAuth.uid);
  // Get the virtual document snapshot
  // this snapshot allows to retrieve either the existing document or a virtual one
  // and gives us access to a set of useful API
  const userSnapShot = await getDoc(userDocRef);
  // Check if the document already exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // Create a new document
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);

  // const { displayName: name, email, password, confirmPassword } = userInfo;
  // Generate unique identifier
  // let uid;
  // // Get the document reference
  // const userDocRef = doc(db, "users", uid);
  // // Get document snapshot
  // const userSnapshot = await getDoc(userDocRef);
  // if (!userSnapshot.exists()) {
  //   // Create user
  //   await setDoc(userDocRef, { name, email });
  // }
};

export const signInUserWithCredentials = async (email, password) => {
  if (!email.trim() || !password.trim()) return;

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUserDocumentFromDocRef = async docRef => {
  return await getDoc(docRef);
};

export const getUserDocumentById = async uid => {
  const docRef = await doc(db, "users", uid);
  return await getDoc(docRef);
};
