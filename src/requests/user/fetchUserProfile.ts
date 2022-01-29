import API from '../_axios'
import SignUpFormModel from "../../../stores/accaunt/registration/SignUpFormModel";
import FieldModel from "../../../stores/form/FieldModel";
import {storeInstance} from "../../../stores/AppStore";
import LoginFormModel from "../../../stores/accaunt/login/LoginFormModel";
//import {TFetchUserLoginParams} from "./fetchUserLogin";
import ProfileFormModel from "../../../stores/accaunt/profile/ProfileFormModel";
import ValidationRules from "../../utils/ValidationRules";
import CareerFormModel from "../../../stores/accaunt/profile/CareerFormModel";
import SkillsFormModel from "../../../stores/accaunt/profile/SkillsFormModel";
import InterestsFormModel from "../../../stores/accaunt/profile/InterestsFormModel";

export type TFetchUserSetParams = {
  login: string
  firstname: string
  lastname: string
  birthDate: string
  //phone: data.fields.phone.value,

  patronymic: string
  sex: number
  personStatusId: number
  countryWikiDataId: string
  regionWikiDataId: string
  cityWikiDataId: string
  disability: boolean
  disabilities: []
}

export function extractFetchUserSetParams(
    data: ProfileFormModel,
): any {
  console.log(data.fields.country.value)
  console.log(data.fields.region.value)
  console.log(data.fields.city.value)
  return {
    firstname: data.fields.firstname.value,
    lastname: data.fields.lastname.value,
    patronymic: data.fields.patronymic.value,
    login: data.fields.login.value,
    sex: data.fields.sex.value,
    birthDate: data.fields.birthDate.value,
    personStatusId: data.fields.personStatusId.value,
    countryWikiDataId: "wiki1",
    regionWikiDataId: "wiki1",
    cityWikiDataId: "wiki1",
    "languageCode": "RU",
    disability: data.fields.disability.value,
    disabilities: [
      {
        disabilityId: 1
      },
      {
        disabilityId: 2
      }
    ],
    location: {
      languageCode: "RU",

      country: {
        code: String(data.fields.country.value.code),
        currencyCodes: data.fields.country.value.currencyCodes,
        name: String(data.fields.country.value.name),
        wikiDataId: String(data.fields.country.value.wikiDataId)
      },
      region: {
        countryCode: String(data.fields.region.value.countryCode),
        fipsCode: String(data.fields.region.value.fipsCode),
        isoCode: String(data.fields.region.value.isoCode),
        name: String(data.fields.region.value.name),
        wikiDataId: String(data.fields.region.value.wikiDataId)
      },
      city: {
        id: Number(data.fields.city.value.id),
        wikiDataId: String(data.fields.city.value.wikiDataId),
        type: String(data.fields.city.value.type),
        city: String(data.fields.city.value.city),
        name: String(data.fields.city.value.name),
        regionCode: String(data.fields.city.value.regionCode),
        countryCode: String(data.fields.city.value.countryCode)
      }
    }
  }
}

export function extractFetchUserSetCareerParams(
    data: CareerFormModel,
): any {
  return {
    company: data.company,
    dateFrom: data.fields.dateFrom.value,
    dateTo: data.fields.dateTo.value,
  }
}

export function extractFetchUserSetSkillsParams(
    data: SkillsFormModel,
): any {
  return {
    name: data.skill.name,
  }
}

export function extractFetchUserSetInterestsParams(
    data: InterestsFormModel,
): any {
  return {
    name: data.interest.name,
  }
}

export function fetchUserProfile(token: any) {
  return API.get<any>('/user/profile/personal', { headers:{'Authorization': `Bearer ${token}`}}).then((response) => {
    storeInstance.profile.hydrate(response.data)
    storeInstance.mainInf.hydrate(response.data)

    return (response)
  })
}

export function deleteUserCareer(token: any, id:number) {
  return API.delete<any>(`/user/profile/personal/career/${id}`, {
    headers: {'Authorization': `Bearer ${token}`},
  }).then((response) => {
    return (response)
  })
}

export function setUserProfile(token: any, params: any) {
  console.log(params)
  return API.put<any>('/user/profile/personal', params, {
    headers:{'Authorization': `Bearer ${token}`},
  }).then((response) => {
    storeInstance.profile.hydrate(response.data)
    storeInstance.mainInf.hydrate(response.data)

    return (response)
  })
}

export function setUserCareer(token: any, params: any) {
  return API.post<any>('/user/profile/personal/career', params, {
    headers:{'Authorization': `Bearer ${token}`},
  }).then((response) => {
    console.log(response)
    return (response)
  })
}

export function setUserSkills(token: any, params: any) {
  return API.post<any>('/user/skill', params, {
    headers:{'Authorization': `Bearer ${token}`},
  }).then((response) => {
    console.log(response)
    return (response)
  })
}

export function setUserInterests(token: any, params: any) {
  return API.post<any>('/user/interest', params, {
    headers:{'Authorization': `Bearer ${token}`},
  }).then((response) => {
    console.log(response)
    return (response)
  })
}

export function deleteUserSkill(token: any, id:number) {
  return API.delete<any>(`/user/skill/${id}`, {
    headers: {'Authorization': `Bearer ${token}`},
  }).then((response) => {
    return (response)
  })
}

export function deleteUserInterest(token: any, id:number) {
  return API.delete<any>(`/user/interest/${id}`, {
    headers: {'Authorization': `Bearer ${token}`},
  }).then((response) => {
    return (response)
  })
}

export function addPhoto(token: any, params: any) {
  return API.post<any>(`/user/profile/personal/avatar`, params, {
    headers: {'Authorization': `Bearer ${token}`},
  }).then((response) => {
    console.log(response)
    return (response)
  })
}