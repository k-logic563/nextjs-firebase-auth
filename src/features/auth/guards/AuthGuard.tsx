import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import type { ReactNode, FC } from 'react'

import { AuthContext } from '../provider'

type Props = {
  children: ReactNode
}

const RESTRICT_ROUTES = ['/signin']

export const AuthGuard: FC<Props> = ({ children }) => {
  const { push } = useRouter()
  const { user } = useContext(AuthContext)

  const redirect = async () => {
    if (!user) {
      await push('/signin')
      return
    }
    if (user && RESTRICT_ROUTES.includes(location.pathname)) {
      await push('/')
      return
    }
  }

  useEffect(() => {
    redirect()
  }, [user])

  return <>{children}</>
}
