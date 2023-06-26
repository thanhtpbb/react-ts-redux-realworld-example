import { IUser } from '@/types/models/IUser'

export interface LoginPayload {
  user: {
    email: string
    password: string
  }
}

export interface RegisterPayload {
  user: {
    email: string
    password: string
    username: string
  }
}

export interface EditCurrentUserPayload {
  user: Partial<IUser>
}

export type ApiEndPointPayload = LoginPayload | RegisterPayload | EditCurrentUserPayload
