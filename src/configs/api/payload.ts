export interface LoginPayload {
  user: {
    email: string
    password: string
  }
}

export type ApiEndPointPayload = LoginPayload
