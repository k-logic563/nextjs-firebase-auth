import React from 'react'

type Props = {
  text: string
}

const ErrorText: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-red-600 text-xs" data-cy="error-text">
      {text}
    </p>
  )
}

export default ErrorText
