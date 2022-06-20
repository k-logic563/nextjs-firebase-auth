import React from 'react'

import Header from './Header'

const MainLayout: React.FC = ({ children }) => (
  <div>
    <Header />
    <div className="py-8">
      <div className="container">{children}</div>
    </div>
  </div>
)

export default MainLayout
