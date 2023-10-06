import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBK0-hdJASp6ayDQzDQi_nfJImBV6iMFk8",
  authDomain: "dragon-news-e5944.firebaseapp.com",
  projectId: "dragon-news-e5944",
  storageBucket: "dragon-news-e5944.appspot.com",
  messagingSenderId: "746688253702",
  appId: "1:746688253702:web:90d856dc98616f08795887",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
