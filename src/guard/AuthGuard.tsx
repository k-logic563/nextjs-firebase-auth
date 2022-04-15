import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { AuthContext, AuthContextProps } from '@/provider/AuthProvider'
import Login from '@/pages/login'
import Loading from '@/components/organisms/Loading'

type Props = {
  children: React.ReactNode
}

const AuthGuard: React.FC<Props> = ({ children }) => {
  const { currentUser, isInitialized } =
    useContext<AuthContextProps>(AuthContext)
  const { pathname } = useRouter()
  const isSignUpPage = pathname === '/signup'

  if (!isInitialized) return <Loading />

  // ログインしていない && サインアップページ
  if (!currentUser && !isSignUpPage) return <Login />

  return <>{children}</>
}

export default AuthGuard
