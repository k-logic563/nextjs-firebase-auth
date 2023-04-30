import { initializeApp } from 'firebase/app'
import type { FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'

if (
  !process.env.FIREBASE_API_KEY ||
  !process.env.FIREBASE_AUTH_DOMAIN ||
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_STORAGE_BUCKET ||
  !process.env.FIREBASE_SENDER_ID ||
  !process.env.FIREBASE_APP_ID
) {
  throw new Error('Missing Firebase configuration')
}

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

initializeApp(firebaseConfig)

export const auth = getAuth()
