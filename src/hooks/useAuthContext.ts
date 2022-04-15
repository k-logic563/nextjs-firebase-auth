import React, { useContext } from 'react'

import { AuthContext, AuthContextProps } from '@/provider/AuthProvider'

const useAuthContext = () => {
  if (!AuthContext) throw new Error('please check context')

  return useContext<AuthContextProps>(AuthContext)
}

export default useAuthContext
