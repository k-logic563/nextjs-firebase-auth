import React from 'react'
import { useRouter } from 'next/router'

import { auth } from '@/utils/firebase'

const Header: React.FC = () => {
  const { push } = useRouter()
  const logOut = async () => {
    try {
      await auth.signOut()
      push('/login')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <header className="bg-indigo-500 py-4">
      <div className="mx-auto container flex justify-between">
        <p className="text-white font-bold">Auth TEST</p>
        <nav>
          <ul>
            <li>
              <button className="text-white" onClick={logOut}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
