import { useContext } from 'react'

import MainLayout from '@/components/layout/MainLayout'
import { AuthContext } from '@/features/auth'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <MainLayout>
      <p className="text-center text-xl font-bold mb-4">HELLO!!</p>
      <table className="max-w-md mx-auto border">
        <tbody>
          <tr>
            <th className="text-left py-3 px-4 bg-gray-100 border">Email</th>
            <td className="py-3 px-4 border">{user?.email}</td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  )
}

export default Home
