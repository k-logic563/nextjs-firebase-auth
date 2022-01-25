import * as fb from 'firebase'
import React, { createContext, useEffect, useState } from 'react'

import { auth } from '@/utils/firebase'

type AuthContextProps = {
  currentUser: fb.default.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<fb.default.User | null | undefined>(
    undefined
  )

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
