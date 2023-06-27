import { IComment } from '@/types/models/IComment'
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

export interface CreateCommentPayload {
  comment: IComment
}

export type ApiEndPointPayload =
  | string
  | LoginPayload
  | RegisterPayload
  | EditCurrentUserPayload
  | CreateArticlePayload
  | CreateCommentPayload
