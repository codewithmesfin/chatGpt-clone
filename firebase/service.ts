import "./config";
import {
  setDoc,
  updateDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

import { getAuth, signOut } from "firebase/auth";

const firebaseService = {
  create(record: string, payload: any) {
    return addDoc(collection(db, record), payload);
  },
  createWithRef(payload: any, record: string, ref: string) {
    return setDoc(doc(db, record, ref), payload);
  },
  update(ref: string, record: string, payload: any) {
    return updateDoc(doc(db, record, ref), payload);
  },
  getDocument(ref: string, record: string) {
    const docRef = doc(db, record, ref);
    return getDoc(docRef);
  },
  deleteItem(ref: string, record: string) {
    return deleteDoc(doc(db, record, ref));
  },
  getCurrentUser() {
    const auth = getAuth();
    return auth.currentUser;
  },
  signout() {
    const auth = getAuth();
    auth.signOut();
    signOut(auth);
  },
};
export default firebaseService;
