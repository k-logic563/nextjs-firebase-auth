import { signInWithEmailAndPassword } from '@firebase/auth'

import { auth } from '@/lib/firebase'

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
}

export const signIn = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password)
  const id = await result.user.getIdToken()
  await fetch('/api/session', { method: 'POST', body: JSON.stringify({ id }) })
}

export const signOut = async () => {
  await fetch('/api/sessionLogout', { method: 'POST' })
}
