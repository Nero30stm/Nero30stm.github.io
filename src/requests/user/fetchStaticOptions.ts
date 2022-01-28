import API from '../_axios'

export async function findStaticOptions(fetchFunction: () => any) {
    let staticOptions: any = []
    let response = await fetchFunction();
    console.log(response)

    response.data.map((data: any) => {
        staticOptions.push({value: data.id, label: data.name})
    })
    return staticOptions
}

export function fetchStatusOptions() {
    return API.get<any>('/user/dict/person-status').then(
        (response) => {
            console.log(response)
            return response
        },
    )
}

export function fetchDisabilityOptions() {

    return API.get<any>('/user/dict/disability').then(
        (response) => {
            return response
        },
    )
}
