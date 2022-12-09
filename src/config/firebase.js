import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzpgFQH1oh55bCdLNj4b4wT__uHGL_zo",
  authDomain: "emailtemplatebuilder-f39cb.firebaseapp.com",
  projectId: "emailtemplatebuilder-f39cb",
  storageBucket: "emailtemplatebuilder-f39cb.appspot.com",
  messagingSenderId: "847823934272",
  appId: "1:847823934272:web:7e0251b8fab1cb734ba0a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const google = new GoogleAuthProvider(auth)


