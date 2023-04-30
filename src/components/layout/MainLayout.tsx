import type { FC } from 'react'

import Header from './Header'

const MainLayout: FC = ({ children }) => (
  <div>
    <Header />
    <div className="py-8">
      <div className="container mx-auto">{children}</div>
    </div>
  </div>
)

export default MainLayout
