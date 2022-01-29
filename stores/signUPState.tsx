import {makeObservable, observable} from "mobx";
import FirstRegistrationStep from "../pages/signup/components/FirstRegistrationStep";
import * as React from "react";

class SignUpState {
    @observable
    component: any;

    constructor() {
        makeObservable(this)
        this.component = <></>
    }

    setAdditionComponent(component: any) {
        this.component = component
    }

    resetAdditionComponent() {
        this.component = <></>
    }
}

export const signUpState = new SignUpState()