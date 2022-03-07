import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVAGOYWvzqnXY1RfEqKg5xA2oalnP-USA",
  authDomain: "itemcollection-licciardello.firebaseapp.com",
  projectId: "itemcollection-licciardello",
  storageBucket: "itemcollection-licciardello.appspot.com",
  messagingSenderId: "403494930682",
  appId: "1:403494930682:web:a60ea1c9718bfcc8fb6143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

