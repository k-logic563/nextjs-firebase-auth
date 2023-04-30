import { AppProps } from 'next/app'

import { AuthGuard, AuthProvider } from '@/features/auth'

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
