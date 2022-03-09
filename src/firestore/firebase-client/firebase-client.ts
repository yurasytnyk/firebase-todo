import {
  collection, 
  CollectionReference,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getFirestore,
} from 'firebase/firestore';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { firebase } from '../config/config';

export class FirebaseClient {
  static db = getFirestore(firebase);
  static auth = getAuth(firebase);
  static provider = new GoogleAuthProvider();

  static createCollection<T>(path: string) {
    return collection(FirebaseClient.db, path) as CollectionReference<T>;
  }

  static async addDocument<T>(collection: CollectionReference<T>, data: T) {
    try {
      return await addDoc(collection, data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getDocuments<T>(collection: CollectionReference<T>) {
    try {
      const data = await getDocs(collection);
      const docsData = data.docs.map((doc) => doc.data());

      return docsData;
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteDocument<T>(collection: CollectionReference<T>, id: string) {
    try {
      await deleteDoc(doc(collection, id));
    } catch (error) {
      console.error(error);
    }
  }

  static async updateDocument<T>(collection: string, data: T) {
    try {
      await updateDoc(doc(FirebaseClient.db, collection), data);
    } catch (error) {
      console.error(error);
    }
  }

  static async signUp(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(FirebaseClient.auth, email, password);
      
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async signIn(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(FirebaseClient.auth, email, password);
      
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async signInWithGoogle() {
    try {
      const response = await signInWithPopup(FirebaseClient.auth, FirebaseClient.provider);
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential?.accessToken;

      return token;
    } catch (error) {
      console.error(error);
    }
  }

  static async signOut() {
    try {
      await signOut(FirebaseClient.auth);
    } catch (error) {
      console.error(error);
    }
  }
}