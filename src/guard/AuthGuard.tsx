import React from 'react'

import Login from '@/pages/login'
import Signup from '@/pages/signup'
import Loading from '@/components/organisms/Loading'
import useAuthContext from '@/hooks/useAuthContext'
import useLocation from '@/hooks/useLocation'

type Props = {
  children: React.ReactNode
}

const AuthGuard: React.FC<Props> = ({ children }) => {
  const { currentUser, isInitialized } = useAuthContext()
  const { pathname } = useLocation()
  const isSignupPage = pathname === '/signup'

  // サインアップページ
  if (isSignupPage) return <Signup />

  // ユーザーステータス取得までのラグ
  // ローディング表示
  if (!isInitialized) return <Loading />

  // 未認証時
  if (!currentUser) return <Login />

  return <>{children}</>
}

export default AuthGuard
