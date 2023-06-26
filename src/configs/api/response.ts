import { IUser } from '@/types/models/IUser'
import { Profile } from '@/types/others/profile'

export interface GetTagsResponse {
  tags: string[]
}

export interface LoginResponse {
  user: IUser
}

export interface RegisterResponse {
  user: IUser
}

export type ProfileResponse = Profile
