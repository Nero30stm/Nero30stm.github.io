import {observer} from "mobx-react";
import {CheckInput, Input} from "../../../src/ui/Form/Inputs";
import {GradientButton} from "../../../src/ui/Buttons";
import * as React from "react";
import {storeInstance} from "../../../stores/AppStore";
import {useRouter} from "next/router";


const ThirdRegistrationStep = observer((props: any) => {
    const router = useRouter()

    const reg = storeInstance.personal
    console.log(storeInstance.confirm.request)
    reg.setResult(storeInstance.confirm.request.userId, storeInstance.confirm.request.confirmationCode)

    async function handleSubmit (event : any){
        event.preventDefault();
        reg.setResult(storeInstance.confirm.request.userId, storeInstance.confirm.request.confirmationCode)
        let res = await reg.fetchRegistration();

        if (res === true) {
            if (res === true) {
                router.push('/auth')
            }
        }
    }
    return (

        <form className="enter-form" onSubmit={handleSubmit}>
            <span>Регистрация</span>
            <Input
                field={reg.fields.login}
                label={'Name'}
                type={'text'}
                placeholder={'Логин'}
            />
            <Input
                field={reg.fields.firstname}
                label={'Name'}
                placeholder={'Имя'}
                type={"text"}
            />
            <Input
                field={reg.fields.lastname}
                label={'Name'}
                placeholder={'Фамилия'}
                type={"text"}
            />
            <GradientButton
                disabled={!reg.isValid}
                type={"submit"}
                text={"Регистрация"}
            />
        </form>

    )
})

export default ThirdRegistrationStep