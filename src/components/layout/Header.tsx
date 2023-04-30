import { useRouter } from 'next/router'
import type { FC } from 'react'

import { logout } from '@/features/auth'

const Header: FC = () => {
  const { push } = useRouter()
  const handleClickLogOut = async () => {
    try {
      await logout()
      await push('/signin')
    } catch (e) {
      console.log(e)
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
