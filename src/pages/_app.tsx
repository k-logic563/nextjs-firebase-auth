import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../auth/AuthProvider'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
