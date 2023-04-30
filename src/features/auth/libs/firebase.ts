import { initializeApp } from 'firebase/app'
import type { FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'

if (
  !process.env.FIREBASE_API_KEY ||
  !process.env.FIREBASE_AUTH_DOMAIN
) {
  throw new Error('Missing Firebase configuration')
}

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
}

initializeApp(firebaseConfig)

export const auth = getAuth()
