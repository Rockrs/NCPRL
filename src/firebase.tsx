// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBqR2vOZW0QmxRqXaurdjCUyGv_Ds2K8vo',
  authDomain: 'ncrpl-86f6e.firebaseapp.com',
  projectId: 'ncrpl-86f6e',
  storageBucket: 'ncrpl-86f6e.appspot.com',
  messagingSenderId: '707838358038',
  appId: '1:707838358038:web:2620c1cfb17fb0ae78fb37',
  measurementId: 'G-SZTHE61LKL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStoreDb = getFirestore();
export const fireStorage = getStorage();
