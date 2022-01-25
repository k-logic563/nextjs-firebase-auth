import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Auth from '@/layout/auth'
import { auth } from '@/utils/firebase'

const SignUp: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])

  const createUser = async (e) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      router.push('/login')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <Auth>
      <section>
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
