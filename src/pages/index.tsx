import React from 'react'
import { GetServerSideProps } from 'next'
import nookies from 'nookies'

import { firebaseAdmin } from '@/lib/firebaseAdmin'
import MainLayout from '@/components/layout/MainLayout'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  const session = cookies.session || ''

  // セッションIDを検証して、認証情報を取得する
  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null)

  // 認証情報が無い場合は、ログイン画面へ遷移させる
  if (!user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      email: user.email,
    },
  }
}

const Home: React.FC<{ email: string }> = ({ email }) => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <p className="text-center text-xl font-bold mb-4">HELLO!!</p>
        <table className="max-w-md mx-auto border">
          <tbody>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 border">Email</th>
              <td className="py-3 px-4 border">{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}

export default Home
