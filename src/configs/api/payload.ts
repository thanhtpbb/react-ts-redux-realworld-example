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

export interface CreateArticlePayload {
  article: {
    title: string
    description: string
    body: string
    tagList: string[]
  }
}

export type ApiEndPointPayload = LoginPayload | RegisterPayload | EditCurrentUserPayload | CreateArticlePayload
