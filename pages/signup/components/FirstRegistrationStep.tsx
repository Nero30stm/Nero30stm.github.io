import {observer} from "mobx-react";
import {CheckInput, Input} from "../../../src/ui/Form/Inputs";
import {GradientButton} from "../../../src/ui/Buttons";
import * as React from "react";
import {PagesSwitch} from "../../../components/beforeEnter/PagesSwitch";
import {storeInstance} from "../../../stores/AppStore";
import {signUpState} from "../../../stores/signUPState";
import SecondRegistrationStep from "./SecondRegistrationStep";


const FirstRegistrationStep = observer((props: any) => {

    let reg = storeInstance.signup

    async function handleSubmit (event : any){
        event.preventDefault();
        let res = await reg.fetchRegistration();

        if (res == true) {
            console.log('step 1 r')
            signUpState.setAdditionComponent(<SecondRegistrationStep/>)
        }
    }

    return (
        <>
            <PagesSwitch/>
            <form className="enter-form" onSubmit={handleSubmit}>
                <Input
                    field={reg.fields.username}
                    label={'Name'}
                    type={'text'}
                    placeholder={'E-mail'}
                />
                <Input
                    field={reg.fields.password}
                    label={'Name'}
                    placeholder={'Пароль'}
                    type={"password"}
                />
                <Input
                    field={reg.fields.confirm}
                    label={'Name'}
                    placeholder={'Пароль'}
                    type={"password"}
                />
                <CheckInput
                    field={reg.fields.mailing}
                    label={'Соглашаюсь на получение рассылки по электронноой почте'}
                    id={'mail'}
                />
                <CheckInput
                    field={reg.fields.agreement}
                    label={'Соглашаюсь с политикой обработки персональных данных '}
                    id={'agree'}
                />
                <GradientButton
                    disabled={reg.disabled}
                    type={"submit"}
                    text={"Регистрация"}
                />
            </form>
        </>

    )
})

export default FirstRegistrationStep