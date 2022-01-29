import {action, makeObservable, observable} from 'mobx';
import IFormModel from '../interfaces/IFormModel';
import FieldModel from './FieldModel';
import ReactionModel from '../ReactionModel';

export default class FormModel extends ReactionModel implements IFormModel {
    @observable isValid: boolean;
    @observable disabled: boolean;
    @observable.ref fields: { [key: string]: FieldModel<any> };

    constructor() {
        super();
        makeObservable(this)
        this.isValid = true;
        this.disabled = true;
        this.fields = {};
    }

    @action
    reset() {
        this.isValid = true;
        this.disabled = false;
        Object.values(this.fields).forEach((field) => field.reset());
    }

    @action
    restore() {
        this.isValid = true;
        this.disabled = false;
        Object.values(this.fields).forEach((field) => field.restore());
    }

    @action
    reinit() {
        this.isValid = true;
        this.disabled = false;
        Object.values(this.fields).forEach((field) => field.init());
    }

    @action
    resetValidation() {
        this.isValid = true;
        Object.values(this.fields).forEach((field) => field.validator.reset());
    }

    @action
    validate() {
        console.log(this.isValid)
        this.isValid = true;
        Object.values(this.fields).forEach(field => {
            this.isValid = field.validator.validate() && this.isValid;
        })
        return this.isValid;
    }

    @action
    setDisabled(disabled: boolean) {
        this.disabled = disabled;
    }
}
