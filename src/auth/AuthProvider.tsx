// @ts-ignore
import { User } from 'firebase';
import { FC, createContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ( props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    console.log(process.env.FIREBASE_KEY)
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
