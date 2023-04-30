import type { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { auth } from '../libs'

type Props = {
  children: ReactNode
}

type UserValue = User | null

type AuthContextType = {
  user: UserValue
  setUser: (user: UserValue) => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserValue>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
