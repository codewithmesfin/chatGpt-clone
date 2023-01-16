// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHfHU2cl1T_Xqodb2g3f2T3Tvs8zQf3wM",
    authDomain: "mvsf-305717.firebaseapp.com",
    databaseURL: "https://mvsf-305717-default-rtdb.firebaseio.com",
    projectId: "mvsf-305717",
    storageBucket: "mvsf-305717.appspot.com",
    messagingSenderId: "258556793412",
    appId: "1:258556793412:web:bd12e0b21d862501822211",
    measurementId: "G-EMWQZNZ9J9"
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
export const db = getFirestore();
export const app = getApp();
export const auth=getAuth()