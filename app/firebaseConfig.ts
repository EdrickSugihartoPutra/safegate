// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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

export async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
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

  return { result, error };
}
