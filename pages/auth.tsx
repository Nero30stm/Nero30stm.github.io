import {observer} from "mobx-react";
import {CheckInput, Input} from "../src/ui/Form/Inputs";
import {GradientButton} from "../src/ui/Buttons";
import * as React from "react";
import {storeInstance} from "../stores/AppStore";
import {BeforeEnterLayout} from "../components/beforeEnter/BeforeEnterLayout";
import {PagesSwitch} from "../components/beforeEnter/PagesSwitch";
import AppStore from "../stores/AppStore";

const Auth = observer((props: any) => {

    let er = new AppStore();
    const login = storeInstance.login;
    //let login = er.login
    console.log('auth')

    let loginHandler = async (e: any) => {
        e.preventDefault();
        const response = await login.fetchLogin();
        if(!response){
            alert('Возникли проблемы с авторизацией')
        }
        //тут получение данных профиля
    };

    return (
        <BeforeEnterLayout>
            <PagesSwitch/>
            <form className="enter-form" onSubmit={loginHandler}>
                <Input
                    field={login.fields.email}
                    label={'Name'}
                    type={'text'}
                    placeholder={'E-mail'}
                />
                <Input
                    field={login.fields.password}
                    label={'Name'}
                    placeholder={'Пароль'}
                    type={"password"}
                />
                <GradientButton
                    type={"submit"}
                    text={"Авторизация"}
                    disabled={!login.isValid}
                />
            </form>
        </BeforeEnterLayout>
    )
})

export default Auth