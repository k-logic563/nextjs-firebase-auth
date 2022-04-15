import React from 'react'
import ReactLoading from 'react-loading'
import colors from 'tailwindcss/colors'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white grid place-items-center">
      <ReactLoading
        type="bars"
        color={colors.indigo['300']}
        width={'10%'}
        height={'10%'}
      />
    </div>
  )
}

export default Loading
