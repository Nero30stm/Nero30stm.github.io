import API from '../_axios'
import {TFetchUserLoginParams} from "./fetchUserLogin";

export function fetchCountryOptions(inputValue: string) {
    return API.post<any>('/location/country',  {
        name: inputValue,
        languageCode: "RU"
    }).then(
        (response) => {
            console.log(response)
            return response
        },
    )
}

export function fetchRegionOptions(inputValue: any, props: any) {
    console.log(props)
    return API.post<any>('/location/region',  {
        name: inputValue,
        languageCode: "RU",
        countryId: props
    }).then(
        (response) => {
            console.log(response)
            return response
        },
    )
}

export function fetchCityOptions(inputValue: any, props: any) {
    //console.log(props)
    return API.post<any>('/location/city',  {
        name: inputValue,
        languageCode: "RU",
        countryId: props.country,
        regionCode: props.region
    }).then(
        (response) => {
            return response
        },
    )
}