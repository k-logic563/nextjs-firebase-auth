import { FC, useEffect, useState } from 'react'
import Router, {useRouter} from 'next/router'
import Link from "next/link"

import {auth} from '../utils/firebase'
import { AuthContext } from '../auth/AuthProvider'

const SignUp: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/")
    })
  }, [])

  const createUser = async (e) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      router.push('/login')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <form onSubmit={createUser}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id='email'
          className='py-1 px-2 auth-input'
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id='password'
          className='py-1 px-2 auth-input'
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className='py-1 px-3 rounded auth-btn'
        type="submit"
      >
        SignUp
      </button>
      <Link href='/login'>
        <a className='auth-link'>Login</a>
      </Link>
    </form>
  )
}

export default SignUp
