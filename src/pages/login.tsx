import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Auth from '@/layout/auth'

import { AuthContext } from '@/provider/AuthProvider'
import * as types from '@/types'
import * as api from '@/api'
import ErrorText from '@/components/molecules/ErrorText'

const Login: React.FC = () => {
  const { push } = useRouter()
  const { dispatch } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const data = await api.signIn(email, password)
      dispatch({
        type: 'LOGIN',
        payload: {
          currentUser: data.user,
        },
      })
      await push('/')
    } catch (e: unknown) {
      const error = e as types.FBError
      let message = 'ログイン情報が違います'
      if (error.code === 'auth/wrong-password') {
        message = 'パスワードが違います'
      }
      setError(message)
    }
  }

  return (
    <Auth>
      <section>
        <div className="mb-3">{error && <ErrorText text={error} />}</div>
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
              data-cy="email"
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
              data-cy="password"
            />
          </div>
          <button className="auth-btn" type="submit" data-cy="submit">
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
