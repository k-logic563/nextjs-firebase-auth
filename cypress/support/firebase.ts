import { initializeApp } from '@firebase/app'
import {
  createUserWithEmailAndPassword,
  deleteUser as fbDeleteUser,
  getAuth,
  signInWithEmailAndPassword,
  User
} from "@firebase/auth";

const config = {
  apiKey: Cypress.env('FIREBASE_KEY')
}

const app = initializeApp(config)

export const auth = getAuth(app)

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const deleteUser = (user: User) => fbDeleteUser(user)
