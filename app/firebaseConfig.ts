// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, DocumentData, documentId, getDoc, getDocs, getFirestore, query, QueryDocumentSnapshot, serverTimestamp, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import placeHolder from "../public/placeholder.jpg";
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
      score:0,
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

  return { result, error };
}

export async function getLeaderboard() {
  let listuser:any = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((e)=>{
    const res = e.data()
    listuser.push(
      {
        name: res.username,
        score: res.score ? res.score : 0,
        pic: placeHolder,
        level:Math.floor((res.score ? res.score : 0 )/100),
      }
    )
  })

  return listuser;
}

export async function getUserInfo() {
  try {
    const querySnapshot = await getDoc(doc(db, "users", auth.currentUser!.uid));
    if(querySnapshot.exists()){
      return {
        username:querySnapshot.data().username,
        level:Math.floor((querySnapshot.data().score?querySnapshot.data().score:0 )/100),
        coins:querySnapshot.data().coins?querySnapshot.data().coins:0,
      }
    }
  } catch (e) {
  }
  return {
    username:"NULL",
    level:0,
    coins:0,
  };
}

export async function increasequizasdas(correctAnswers:number) {
  const score = correctAnswers * 50;
  const coins = correctAnswers * 5
  if(score >= 150){
    try {
      const querySnapshot = await getDoc(doc(db, "users", auth.currentUser!.uid));
      if(querySnapshot.exists()){
        const adsfdghjk = querySnapshot.data().score ? querySnapshot.data().score : 0
        const currcoins = querySnapshot.data().coins ? querySnapshot.data().coins : 0
        await updateDoc(doc(db, "users", auth.currentUser!.uid),{
          score: adsfdghjk + score,
          coins: coins + currcoins,
        }); 
      }
    } catch (e) {
    }
    alert('yay dapet coin!')
    return
  }
  alert('kamu blm beruntung. coba lagi ya!')
}

export async function getLatestLesson() {
  try {
    const querySnapshot = await getDoc(doc(db, "users", auth.currentUser!.uid));
    if(querySnapshot.exists()){
      return {
        id:querySnapshot.data().latestLessonId,
      }
    }
  } catch (e) {
  }
  return {
    id:null
  };
}

export async function setLatestLesson(lastetLessonID:number) {
    try {
      await updateDoc(doc(db, "users", auth.currentUser!.uid),{
        latestLessonId:lastetLessonID,
      }); 
    } catch (e) {
    }
}

export async function removeLatestLesson() {
  try {
    await updateDoc(doc(db, "users", auth.currentUser!.uid),{
      latestLessonId:0,
    }); 
  } catch (e) {
  }
}