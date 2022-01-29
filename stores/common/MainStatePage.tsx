import {action, makeObservable, observable} from "mobx";
import React from "react";

class MainStatePage {
    @observable
    additionComponent: any

    constructor() {
        makeObservable(this)
        this.additionComponent = <></>
    }

    @action
    setAdditionComponent(component: any) {
        this.additionComponent = component
    }

    @action
    resetAdditionComponent() {
        this.additionComponent = <></>
    }
}

export const mainStatePage = new MainStatePage()