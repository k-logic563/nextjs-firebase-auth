import React from 'react'
import { useRouter } from 'next/router'

import Login from '@/pages/login'
import useAuthContext from '@/hooks/useAuthContext'
import Signup from '@/pages/signup'
import Loading from '@/components/organisms/Loading'

type Props = {
  children: React.ReactNode
}

const AuthGuard: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const { state } = useAuthContext()

  if (!state.isInitialized) return <Loading />

  if (pathname === '/signup') return <Signup />

  // 未認証時
  if (!state.isLogin) return <Login />

  return <>{children}</>
}

export default AuthGuard
