import { useRouter } from 'next/router'

const useLocation = () => {
  const { pathname } = useRouter()
  return {
    pathname,
  }
}

export default useLocation
