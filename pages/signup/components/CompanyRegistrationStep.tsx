import {observer} from "mobx-react";
import {useRouterStore} from "mobx-state-router";
import {CheckInput, Input} from "../../../src/ui/Form/Inputs";
import {GradientButton} from "../../../src/ui/Buttons";
import * as React from "react";
import {ThirdButton} from "../../../src/ui/Buttons";
import {UniversalSelect} from "../../../src/ui/Form/SelectInput/AsyncSelectInput"
import {storeInstance} from "../../../stores/AppStore";
import {fetchCountryOptions} from "../../../src/requests/user/fetchOptions";
import {useRouter} from "next/router";

const CompanyRegistrationStep = observer((props: any) => {
    const router = useRouter()

    const reg = storeInstance.company
    reg.fields.userId.set(storeInstance.confirm.request.userId)
    reg.fields.confirmationCode.set(storeInstance.confirm.request.confirmationCode)

    async function handleSubmit (event : any){
        event.preventDefault();
        let res = await reg.fetchRegistration();

        if (res === true) {
            router.push('/auth')
        }
    }

    return (
        <form className="enter-form" onSubmit={handleSubmit}>
            <span>Регистрация</span>
            <Input
                field={reg.fields.orgName}
                label={'Name'}
                type={'text'}
                placeholder={'Название организации'}
            />
            <UniversalSelect
                fetchOptions={fetchCountryOptions}
                field={reg.fields.countryWikiDataId}
                placeholder={'Страна'}
            />
            <GradientButton
                disabled={!reg.isValid}
                type={"submit"}
                text={"Регистрация"}
            />
        </form>

    )
})

export default CompanyRegistrationStep