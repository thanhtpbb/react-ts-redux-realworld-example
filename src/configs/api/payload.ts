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

export type ApiEndPointPayload = LoginPayload | RegisterPayload
