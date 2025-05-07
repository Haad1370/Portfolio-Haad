// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD6HNY-CoSkZzC5Ka18ei7R53H1D7KpTKE",
  authDomain: "myappauth-5ce2e.firebaseapp.com",
  projectId: "myappauth-5ce2e",
  storageBucket: "myappauth-5ce2e.firebasestorage.app",
  messagingSenderId: "351766774124",
  appId: "1:351766774124:web:9917058d7a8b8de015f349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
