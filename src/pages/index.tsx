import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import * as fb from 'firebase'

import Layout from '@/layout/layout'
import { auth } from '@/utils/firebase'

const Home: FC = () => {
  const { push } = useRouter()
  const [currentUser, setCurrentUser] = useState<null | fb.default.User>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : push('/login')
    })
  }, [])

  return (
    <Layout>
      <div className="text-center">
        <p className="text-center text-xl font-bold mb-4">HELLO!!</p>
        <p>Your Email: {currentUser?.email}</p>
      </div>
    </Layout>
  )
}

export default Home
