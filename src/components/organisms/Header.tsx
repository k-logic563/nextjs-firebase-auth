import React from 'react'
import { useRouter } from 'next/router'

import * as api from '@/api'

const Header: React.FC = () => {
  const { push } = useRouter()
  const handleClickLogOut = async () => {
    try {
      await api.auth.signOut()
      await push('/login')
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
              <button className="text-white" onClick={handleClickLogOut}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
