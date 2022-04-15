import React from 'react'
import Link from 'next/link'

import Layout from '@/layout/layout'

const ErrorPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-wider">404 Page</h1>
        <Link href="/">
          <a className="inline-block py-3 px-5 rounded bg-indigo-500 hover:bg-white text-white hover:text-indigo-500 border border-transparent hover:border-indigo-500 transition-all duration-100">
            Go To Home
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
