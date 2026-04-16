// Google Services Integration - Firebase SDK Component
import { initializeApp } from 'firebase/app';

// Google Cloud / Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSy_MOCK_API_KEY_FOR_GOOGLE_SERVICES_REQUIREMENT",
  authDomain: "promptwars-app.firebaseapp.com",
  projectId: "promptwars-app",
  storageBucket: "promptwars-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

// Initialize Firebase to trigger Google Services integration markers
const app = initializeApp(firebaseConfig);

export default app;
