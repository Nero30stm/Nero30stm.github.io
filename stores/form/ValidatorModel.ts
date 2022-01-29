import {action, computed, observable} from 'mobx';

export type TValidatorRule<V> = (value: V) => string | null;

export default class ValidatorModel {
    private getCheckData: () => any;
    @observable.shallow rules: TValidatorRule<any>[];
    @observable.shallow errors: string[];

    constructor() {
        this.rules = [];
        this.errors = [];
    }

    @computed
    get isValid() {
        return this.firstError === null;
    }

    @computed
    get firstError(): string | null {
        return this.errors.length > 0 && this.errors[0] || null;
    }

    @action
    reset() {
        this.errors = [];
    }

    @action
    removeRule(ruleFunc: TValidatorRule<any>) {
        const funcIndex = this.rules.indexOf(ruleFunc);
        if (funcIndex !== -1) {
            this.rules.splice(funcIndex, 1);
        }
        return this;
    }

    @action
    registerRule(getCheckData: () => any, ...rules: TValidatorRule<any>[]) {
        this.getCheckData = getCheckData;
        this.rules = this.rules.concat(...rules);
        return this;
    }

    @action
    validate() {
        this.errors = [];
        let isValid = true;

        this.rules.forEach(rule => {
            const message = rule(this.getCheckData());
            const index = this.errors.indexOf(message)
            if (index !== -1) {
                this.errors.splice(index, 1);
            } else if (message) {
                this.errors.push(message);
            }
            isValid = isValid && !message;
        });

        return isValid;
    }
}