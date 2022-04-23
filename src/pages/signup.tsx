import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Auth from '@/layout/auth'

import * as api from '@/api'
import * as types from '@/types'
import ErrorText from '@/components/molecules/ErrorText'

const SignUp: React.FC = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await api.signUp(email, password)
      alert('アカウントを作成しました。\nログインしてください。')
      await router.push('/login')
    } catch (e: unknown) {
      const error = e as types.FBError
      let message = '登録できませんでした'
      if (error.code === 'auth/email-already-in-use') {
        message = '既に使用されているメールアドレスです'
      }
      setError(message)
    }
  }

  return (
    <Auth>
      <section>
        <div className="mb-3">{error && <ErrorText text={error} />}</div>
        <h1 className="font-bold text-xl mb-6">サインアップ</h1>
        <form className="auth" onSubmit={createUser}>
          <div>
            <label htmlFor="email" className="auth-label">
              Email:{' '}
            </label>
            <input
              id="email"
              className="auth-input"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              required
              onChange={(e) => setPassword(e.target.value)}
              data-cy="password"
            />
          </div>
          <button className="auth-btn" type="submit" data-cy="submit">
            サインアップ
          </button>
        </form>
        <div className="text-center">
          <Link href="/login">
            <a className="auth-link">ログインへ</a>
          </Link>
        </div>
      </section>
    </Auth>
  )
}

export default SignUp
