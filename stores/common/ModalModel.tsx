import {observable, makeObservable, action} from 'mobx'

export class ModalModel {
    @observable isOpenedModal: boolean
    @observable isOpenedNotification: boolean
    component: any

    constructor() {
        makeObservable(this)
        this.isOpenedModal = false
        this.isOpenedNotification = false
        this.component = <></>
    }

    openModal = (component: any) => {
        this.component = component
        this.isOpenedModal = true
    }

    closeModal = () => {
        this.component = <></>
        this.isOpenedModal = false
    }
}

export const modalModel = new ModalModel()