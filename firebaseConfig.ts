import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const firebaseConfig = {
  apiKey: "AIzaSyACgjGAK2pHfz1gpsrV_oGxIGqyqKKnimE",
  authDomain: "st-school-5f262.firebaseapp.com",
  projectId: "st-school-5f262",  
  storageBucket: "st-school-5f262.firebasestorage.app",
  messagingSenderId: "1004382985275",
  appId: "1:1004382985275:web:45b1e90861ffe64ad0d01e",
  measurementId: "G-2BKVXLN72F"
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize App Check with reCAPTCHA v3
// initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('<YOUR_RECAPTCHA_SITE_KEY>'),
//   isTokenAutoRefreshEnabled: true,
// })
