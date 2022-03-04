import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import { AuthContext } from '@/auth/AuthProvider'

const Auth: React.FC = ({ children }) => {
  const { push } = useRouter()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser && push('/')
  }, [currentUser])

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-lg w-11/12">
        {children}
      </div>
    </div>
  )
}

export default Auth
