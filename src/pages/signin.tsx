import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import type { FC } from 'react'

import { login } from '@/features/auth'
import { Form } from '@/features/auth/components'

const Signin: FC = () => {
  const { push } = useRouter()
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
      const { email, password } = e.currentTarget.elements as unknown as {
        email: HTMLInputElement
        password: HTMLInputElement
      }

      await login({
        email: email.value,
        password: password.value,
      })
      await push('/')
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message)
      }
    }
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <section className="max-w-[450px] w-[90%]">
        <Form
          signin={signin}
          errorMessage={displayErrorMessage}
        />
      </section>
    </div>
  )
}

export default Signin
