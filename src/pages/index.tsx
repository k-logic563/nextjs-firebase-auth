import React, { useContext } from 'react'

import Layout from '@/layout/layout'

import useAuthContext from '@/hooks/useAuthContext'

const Home: React.FC = () => {
  const { currentUser } = useAuthContext()

  return (
    <Layout>
      <div className="container mx-auto">
        <p className="text-center text-xl font-bold mb-4">HELLO!!</p>
        <table className="max-w-md mx-auto border">
          <tbody>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 border">UID</th>
              <td className="py-3 px-4 border">{currentUser?.uid}</td>
            </tr>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 border">Email</th>
              <td className="py-3 px-4 border">{currentUser?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Home
