import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Auth from '@/layout/auth'
import { auth } from '@/utils/firebase'

const Login: React.FC = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && push('/')
    })
  }, [])

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      push('/')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <Auth>
      <section>
        <h1 className="font-bold text-xl mb-6">ログイン</h1>
        <form className="auth" onSubmit={logIn}>
          <div>
            <label htmlFor="email" className="auth-label">
              Email:{' '}
            </label>
            <input
              id="email"
              className="auth-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="auth-label">
              Password:{' '}
            </label>
            <input
              id="password"
              className="auth-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="auth-btn" type="submit">
            ログイン
          </button>
        </form>
        <div className="text-center">
          <Link href="/signup">
            <a className="auth-link">サインアップ</a>
          </Link>
        </div>
      </section>
    </Auth>
  )
}

export default Login
