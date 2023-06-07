// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, documentId, getDoc, getDocs, getFirestore, query, QueryDocumentSnapshot, serverTimestamp, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ERzQEn4ihu3x1DbAnyl0IVm4aQ52HEg",
  authDomain: "amankuy-a5f83.firebaseapp.com",
  projectId: "amankuy-a5f83",
  storageBucket: "amankuy-a5f83.appspot.com",
  messagingSenderId: "502928379792",
  appId: "1:502928379792:web:141e31f4670631bf75ed15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Signup Firebase
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storagedb = getStorage(app);


export async function signUp(email: string, password: string, username:string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  try {
    const docRef = await setDoc(doc(db, "users", auth.currentUser!.uid), {
      timestamp: serverTimestamp(),
      UID:auth.currentUser!.uid,
      username: username,
      coins:0,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  const querySnapshot = await getDoc(doc(db, "users", auth.currentUser!.uid));
  // if(querySnapshot.exists()){ //test username access
  //   alert(querySnapshot.data().username);
  // }

  return { result, error };
}
