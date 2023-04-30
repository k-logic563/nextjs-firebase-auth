import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '@/features/auth'

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  return signOut(auth)
}
