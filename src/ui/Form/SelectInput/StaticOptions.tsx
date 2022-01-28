import {fetchStatusOptions} from "../../../requests/user/fetchStaticOptions";

export const SexOptions = [
    { value: 1, label: "Мужской" },
    { value: 2, label: "Женский" },
];

export async function StatusOptions() {
    let statusOptions: any = []
    let result = await fetchStatusOptions();
    console.log(result)


    result.data.map((data: any) => {
        statusOptions.push({value: data.id, label: data.name})
    })
    return statusOptions
}

