import { initializeApp } from '@firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
} from '@firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
}

const app = initializeApp(config)

export const auth = getAuth(app)

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signOut = () => fbSignOut(auth)
