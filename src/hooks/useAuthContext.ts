import React, { useContext } from 'react'

import { AuthContext, AuthContextProps } from '@/provider/AuthProvider'

const useAuthContext = () => {
  const authContext = useContext<AuthContextProps>(AuthContext)
  if (!authContext) throw new Error('please check context')

  return authContext
}

export default useAuthContext
