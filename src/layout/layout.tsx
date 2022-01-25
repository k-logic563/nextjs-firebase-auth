import React from 'react'

import Header from '@/components/organisms/Header'

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <div className="py-8">{children}</div>
  </div>
)

export default Layout
