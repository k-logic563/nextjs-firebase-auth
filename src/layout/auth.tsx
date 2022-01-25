import React from 'react'

const Auth: React.FC = ({ children }) => (
  <div className="min-h-screen grid place-items-center">
    <div className="max-w-lg w-11/12">
      {children}
    </div>
  </div>
)

export default Auth
