import { IUser } from '@/types/models/IUser'

export interface GetTagsResponse {
  tags: string[]
}

export interface LoginResponse {
  user: IUser
}
