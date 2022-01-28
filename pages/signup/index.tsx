import * as React from 'react';
import FirstRegistrationStep from "./components/FirstRegistrationStep";
import {BeforeEnterLayout} from "../../components/beforeEnter/BeforeEnterLayout";
import { useEffect, useState } from 'react';
import {action, makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import {signUpState} from "../../stores/signUPState";


const SignUp = observer(() => {
    useEffect(() => signUpState.setAdditionComponent(<FirstRegistrationStep/>), []
    )

    return (
        <BeforeEnterLayout>
            {signUpState.component}
        </BeforeEnterLayout>
    )
})

export default SignUp