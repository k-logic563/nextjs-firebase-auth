import { User, AuthError } from 'firebase/auth'

export type FBUser = User | null
export type FBError = AuthError
