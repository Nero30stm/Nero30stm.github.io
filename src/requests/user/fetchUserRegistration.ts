import API from '../_axios'
import SignUpFormModel from "../../../stores/accaunt/registration/SignUpFormModel";
import FieldModel from "../../../stores/form/FieldModel";

export type TFetchUserRegistrationParams = {
  username: string
  password: string
  mailing: boolean
}


export function extractFetchUserRegistrationParams(
  data: SignUpFormModel,
): TFetchUserRegistrationParams {
  return {
    username: data.fields.username.value,
    password: data.fields.password.value,
    mailing: data.fields.mailing.value
  }
}

export type TFetchUserRegistrationPersonParams = {
    userId: string,
    confirmationCode: string,
    firstname: string,
    lastname: string,
    login: string,
}


export function extractFetchUserRegistrationPersonParams(
    data: any,
): TFetchUserRegistrationPersonParams {
    return {
        userId: data.request.userId,
        confirmationCode: data.request.confirmationCode,
        firstname: data.fields.firstname.value,
        lastname: data.fields.lastname.value,
        login: data.fields.login.value,

    }
}

export type TFetchUserRegistrationCompanyParams = {
    userId: string,
    confirmationCode: string,
    orgName: string,
    countryWikiDataId: string,
}


export function extractFetchUserRegistrationCompanyParams(
    data: any,
): TFetchUserRegistrationCompanyParams {
    return {
        userId: data.fields.userId.value,
        confirmationCode: data.fields.confirmationCode.value,
        orgName: data.fields.orgName.value,
        countryWikiDataId: data.fields.countryWikiDataId.value,

    }
}

export function fetchUserSignUp(
  params: TFetchUserRegistrationParams,
) {
  console.log(params)
  return API.post<any>('/sso/signup', params).then(
    (response) => {
      return response
    },
  )
}

export function fetchUserConfirm(
    params: any,
) {
  console.log(params)
  return API.post<any>('/sso/signup/confirm', params).then(
      (response) => {
        return response
      },
  )
}

export function fetchUserPersonal(
    params: any,
) {
  console.log(params)
  return API.post<any>('/sso/signup/activate/personal', params).then(
      (response) => {
        return response
      },
  )
}

export function fetchUserCompany(
    params: any,
) {
  console.log(params)
  return API.post<any>('/sso/signup/activate/organization', params).then(
      (response) => {
        return response
      },
  )
}
