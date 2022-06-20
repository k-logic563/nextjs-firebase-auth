import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as api from '@/api'

const Signin: React.FC = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await api.auth.signIn(email, password)
      await push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="container min-h-screen grid place-items-center">
      <section className="w-1/2">
        <h1 className="font-bold text-xl mb-6">ログイン</h1>
        <form className="auth" onSubmit={signin}>
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
    </div>
  )
}

export default Signin
