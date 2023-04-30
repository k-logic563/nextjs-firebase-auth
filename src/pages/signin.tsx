import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import type { FC } from 'react'

import { login } from '@/features/auth'

const Signin: FC = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const displayErrorMessage = useMemo(() => {
    let message = ''

    if (errorMessage.includes('user-not-found')) {
      message = 'ユーザーが見つかりませんでした。'
    } else if (errorMessage.includes('wrong-password')) {
      message = 'パスワードが間違っています。'
    } else if (errorMessage.includes('too-many-requests')) {
      message = 'アカウントがロックされました。しばらくしてからお試しください。'
    } else {
      message = errorMessage
    }

    return message
  }, [errorMessage])

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login({
        email,
        password,
      })
      await push('/')
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
        setErrorMessage(e.message)
      }
    }
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <section className="max-w-[450px] w-[90%]">
        { errorMessage && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
            {displayErrorMessage}
          </div>
        )}
        <form onSubmit={signin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              パスワード
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ログイン
          </button>
        </form>
      </section>
    </div>
  )
}

export default Signin
