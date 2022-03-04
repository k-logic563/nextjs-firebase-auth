import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as utils from '@/utils'

const Auth: React.FC = ({ children }) => {
  const { push } = useRouter()

  useEffect(() => {
    utils.fb.auth.onAuthStateChanged((user) => {
      user && push('/')
    })
  }, [])
  
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-lg w-11/12">
        {children}
      </div>
    </div>
  )
}

export default Auth
