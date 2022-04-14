import React from 'react'
import { AppProps } from 'next/app'

import { AuthProvider } from '@/provider/AuthProvider'
import AuthGuard from '@/guard/AuthGuard'

import '@/styles/global.css'
import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </AuthProvider>
  )
}

export default MyApp
