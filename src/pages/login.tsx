import React, {useEffect, useState} from 'react';
import Link from "next/link"
import {useRouter} from 'next/router'
import {auth} from "../utils/firebase";

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push('/')
    })
  }, [])

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      router.push("/")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <form onSubmit={logIn}>
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
        <button className='py-1 px-3 rounded auth-btn' type="submit">
          Login
        </button>
      </form>
      <Link href='/signup'>
        <a className='auth-link'>signup</a>
      </Link>
    </div>
  );
};

export default Login;
