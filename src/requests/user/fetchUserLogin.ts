import API from '../_axios'
import LoginFormModel from '../../../stores/accaunt/login/LoginFormModel'
import modelInstance from '../../../stores/_instance'

export type TFetchUserLoginParams = {
  username: string
  password: string
}

export type TUserLoginResponse = {
  data: {
    token: string
    email: string
    password: string
    rememberMe: boolean
  }
}

export function extractFetchUserLoginParams(
  data: LoginFormModel,
): TFetchUserLoginParams {
  return {
    username: data.fields.email.value,
    password: data.fields.password.value,
  }
}

export default function fetchUserLogin(params?: TFetchUserLoginParams) {
  return API.post<any>('/sso/signin',  params).then(
    (response) => {
      if(response.data.token) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('auth_token', response.data.token)
        }
      }
      return response
    },
  )
}
