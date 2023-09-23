import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXINufCqd_1ZyjhO6Bc1tbq0erh-QXVCg",
  authDomain: "photogallery-973be.firebaseapp.com",
  projectId: "photogallery-973be",
  storageBucket: "photogallery-973be.appspot.com",
  messagingSenderId: "491004554565",
  appId: "1:491004554565:web:4cbd0b0b3966974b52622c",
  measurementId: "G-VK8X8C1NEV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
