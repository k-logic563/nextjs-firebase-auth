import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Auth from '@/layout/auth'
import * as utils from '@/utils'

const Login: React.FC = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await utils.fb.auth.signInWithEmailAndPassword(email, password)
      await push('/')
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
              required
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
              required
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
