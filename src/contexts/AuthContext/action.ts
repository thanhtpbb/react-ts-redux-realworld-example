export type AuthState = {
  isFetching: boolean
}

export enum AuthAction {
  AUTH_ACTION_PENDING = 'AUTH_ACTION_PENDING',
  AUTH_ACTION_FAILURE = 'AUTH_ACTION_FAILURE',

  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
}

interface AuthActionPending {
  type: AuthAction.AUTH_ACTION_PENDING
}

interface AuthActionFailure {
  type: AuthAction.AUTH_ACTION_FAILURE
}

interface LoginSuccess {
  type: AuthAction.LOGIN_SUCCESS
}

interface RegisterSuccess {
  type: AuthAction.REGISTER_SUCCESS
}

export type AuthActionType = AuthActionPending | AuthActionFailure | LoginSuccess | RegisterSuccess
