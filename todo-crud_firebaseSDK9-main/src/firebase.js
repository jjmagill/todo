import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeEsAPDTGHwfXMP7KuXmTpNVT44rWo2d0",
  authDomain: "todo-list-fe906.firebaseapp.com",
  projectId: "todo-list-fe906",
  storageBucket: "todo-list-fe906.appspot.com",
  messagingSenderId: "114967394656",
  appId: "1:114967394656:web:9f8e38a445909db7040605"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
