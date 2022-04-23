import React, { createContext, useReducer, useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'

import * as types from '@/types'
import * as api from '@/api'

enum ActionType {
  INIT = 'INIT',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  isInitialized?: boolean
  isLogin?: boolean
  currentUser?: types.FBUser
}

type Action = {
  type: 'INIT' | 'LOGIN' | 'LOGOUT'
  payload: Payload
}

export type AuthContextProps = {
  state: Payload
  dispatch: React.Dispatch<Action>
}

function reducer(state: Payload, action: Action) {
  switch (action.type) {
    case ActionType.INIT:
      return {
        ...state,
        isInitialized: action.payload.isInitialized,
        isLogin: action.payload.isLogin,
        currentUser: action.payload.currentUser,
      }
    case ActionType.LOGIN:
      return {
        ...state,
        isLogin: true,
        currentUser: action.payload.currentUser,
      }
    case ActionType.LOGOUT:
      return {
        ...state,
        isLogin: false,
        currentUser: undefined,
      }
    default:
      return {
        ...state,
      }
  }
}

const initialState = {
  isInitialized: false,
  isLogin: false,
  currentUser: undefined,
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = onAuthStateChanged(api.auth, (user) => {
      if (user) {
        dispatch({
          type: 'INIT',
          payload: {
            isLogin: true,
            isInitialized: true,
            currentUser: user,
          },
        })
      } else {
        dispatch({
          type: 'INIT',
          payload: {
            isInitialized: true,
          },
        })
      }
    })
    return () => {
      initialize()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
