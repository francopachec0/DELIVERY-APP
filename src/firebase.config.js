import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA__uzh-ZhQ2CNHKe3tm0bxtibqBMd5S_w",
  authDomain: "delivery-app-afd43.firebaseapp.com",
  databaseURL: "https://delivery-app-afd43-default-rtdb.firebaseio.com",
  projectId: "delivery-app-afd43",
  storageBucket: "delivery-app-afd43.appspot.com",
  messagingSenderId: "998638956637",
  appId: "1:998638956637:web:246e5943f4adfc17281db4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const database = getFirestore(app);

const storage = getStorage(app);

export { app, database, storage };