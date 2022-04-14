import { onAuthStateChanged, User } from '@firebase/auth'
import React, { createContext, useEffect, useState } from 'react'

import * as api from '@/api'

export type AuthContextProps = {
  isInitialized: boolean
  currentUser: User | null | undefined
}

type State = {
  isInitialized: boolean
  currentUser: User | null | undefined
}

const initialState = {
  isInitialized: false,
  currentUser: undefined,
}

const AuthContext = createContext<AuthContextProps>({} as State)

const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    const initialize = () => {
      onAuthStateChanged(api.auth, (user) => {
        setState({ ...state, currentUser: user, isInitialized: true })
      })
    }
    initialize()
  }, [])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
