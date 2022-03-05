import * as fb from 'firebase'
import React, { createContext, useEffect, useState } from 'react'

import * as utils from '@/utils'

type AuthContextProps = {
  currentUser: fb.default.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<fb.default.User | null | undefined>(
    undefined
  )

  useEffect(() => {
    utils.fb.auth.onAuthStateChanged((user) => {
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
