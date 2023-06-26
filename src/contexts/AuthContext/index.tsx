/* eslint-disable @typescript-eslint/no-empty-function */
import { AuthAction, AuthActionType, AuthState } from './action'
import { createContext, useReducer } from 'react'
import { apiCall } from '@/configs/api'
import { Callback } from '@/types/others/callback'
import { API_URLS } from '@/configs/api/endpoint'
import { LoginPayload } from '@/configs/api/payload'

const initialState: AuthState = {
  isFetching: false,
}

function authReducer(state = initialState, action: AuthActionType): AuthState {
  switch (action.type) {
    case AuthAction.AUTH_ACTION_PENDING:
      return { ...state, isFetching: true }
    case AuthAction.AUTH_ACTION_FAILURE:
      return { ...state, isFetching: false }
    case AuthAction.LOGIN_SUCCESS:
      return { ...state, isFetching: false }
    case AuthAction.REGISTER_SUCCESS:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

function useAuthReducer(_state = initialState) {
  const [state, dispatch] = useReducer(authReducer, _state)

  const login = async (payload: LoginPayload, cb?: Callback) => {
    dispatch({ type: AuthAction.AUTH_ACTION_PENDING })

    const { response, error } = await apiCall({ ...API_URLS.USERS_AND_AUTHENTICATION.LOGIN(), payload })

    if (!error && response?.status === 200) {
      dispatch({ type: AuthAction.LOGIN_SUCCESS })
      cb?.onSuccess?.(response.data)
    } else {
      dispatch({ type: AuthAction.AUTH_ACTION_FAILURE })

      const { errors } = error.response.data
      const [firstErrorKey, firstErrorMessage] = Object.entries(errors)[0]

      cb?.onError?.([firstErrorKey, firstErrorMessage])
    }
  }

  return { state, login }
}

export const AuthContext = createContext<ReturnType<typeof useAuthReducer>>({
  state: initialState,
  login: async () => {},
})

interface AuthProviderProps {
  children: React.ReactNode | string
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authReducer = useAuthReducer()

  return <AuthContext.Provider value={authReducer}>{children}</AuthContext.Provider>
}
