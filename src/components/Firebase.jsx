import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAOJFKSw5ehiLupMZLl1Odq3gOebMiXl4",
  authDomain: "twitter-clone-a346b.firebaseapp.com",
  databaseURL:
    "https://twitter-clone-a346b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "twitter-clone-a346b",
  storageBucket: "twitter-clone-a346b.appspot.com",
  messagingSenderId: "52596295482",
  appId: "1:52596295482:web:1cb68f137032629d803203",
  measurementId: "G-J2NXVZD03F",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
console.log(db);
export default db;
