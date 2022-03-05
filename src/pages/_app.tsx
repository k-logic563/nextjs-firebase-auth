import React from 'react'
import { AppProps } from 'next/app'

import { AuthProvider } from '@/provider/AuthProvider'

import '@/styles/global.css'
import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
