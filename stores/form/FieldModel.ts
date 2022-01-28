import {action, computed, makeObservable, observable} from 'mobx';
import ValidatorModel, {TValidatorRule} from './ValidatorModel';

export default class FieldModel<V> {
    @observable.ref validator: ValidatorModel;
    @observable.ref value: V;
    @observable.ref _value: V;

    constructor(
        value: V,
        rules?: TValidatorRule<V>[],
        readonly onValueChangeBefore?: (value: V) => V,
        readonly onValueChangeAfter?: (value: V) => V,
    ) {
        makeObservable(this)
        this.value = value;
        this._value = value;
        this.validator = new ValidatorModel();
        this.validator.registerRule(() => this.value, ...rules || []);
    }

    @computed
    get empty() {
        return !this.value;
    }

    @computed
    get returnDate() {
        let date = new Date(this.value);
        return date.toISOString().substring(0,10);
    }

    @action
    restore() {
        this.value = this._value;
        this.validator.reset();
    }

    @action
    reset() {
        this.value = undefined;
        this.validator.reset();
    }

    @action
    set(value: V) {
        this.value = this.onValueChangeBefore ? this.onValueChangeBefore(value) : value;
        this.onValueChangeAfter && this.onValueChangeAfter(value);
    }

    @action
    init(value?: V) {
        if (value) {
            this.set(value);
            this._value = value;
        } else {
            this._value = this.value;
        }
    }
}
