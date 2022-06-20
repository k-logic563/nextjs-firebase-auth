import React from 'react'
import { AppProps } from 'next/app'

import '@/styles/global.css'
import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
