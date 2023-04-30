import type { FC } from 'react'

type Props = {
  errorMessage: string
  signin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const Form: FC<Props> = ({
  errorMessage,
  signin,
}) => {
  return (
    <form onSubmit={signin}>
      { errorMessage && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
          {errorMessage}
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" "
          required
        />
      </div>
      <div className="relative z-0 w-full mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          パスワード
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=" "
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ログイン
      </button>
    </form>
  )
}
