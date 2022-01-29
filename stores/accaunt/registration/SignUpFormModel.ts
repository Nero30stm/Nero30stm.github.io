import {action, makeObservable, observable, reaction} from 'mobx'
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import {fetchUserSignUp,
    extractFetchUserRegistrationParams,
} from '../../../src/requests/user/fetchUserRegistration'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
import {storeInstance} from "../../AppStore";

export default class SignUpFormModel extends FormModel {
    @observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    fields: {
        username: FieldModel<string>
        password: FieldModel<string>
        confirm: FieldModel<string>
        mailing: FieldModel<boolean>
        agreement: FieldModel<boolean>
    }

    constructor() {
        super()
        makeObservable(this)
        this.serverActionLogin = new ServerActionModel('')


        this.fields = {
            username: new FieldModel('', [ValidationRules.required]),
            password: new FieldModel('', [ValidationRules.required]),
            confirm: new FieldModel('',[ValidationRules.required]),
            mailing: new FieldModel(false, []),
            agreement: new FieldModel(false, [ValidationRules.required])
        }

        this.validate();

        this.onChangeReaction = reaction(
            () => Object.values(this.fields).map((field) => field.value),
            _=> {this.validate(); this.checkValidation()}
        )
    }

    protected checkValidation() {
        if (this.fields.confirm.value != '' && this.fields.password.value != this.fields.confirm.value){
            this.fields.confirm.validator.errors.push('пароли должны совпадать')
        }

        if (this.isValid === true && this.fields.password.value === this.fields.confirm.value){
            this.disabled = false;
        }
        else {
            this.disabled = true
        }
    }

    protected onChangeExpressionOfReaction() {
        return Object.values(this.fields).map((field) => field.value)
    }

    @action
    async fetchRegistration() {
        try {
            //this.serverActionLogin.pending()
            const response = await fetchUserSignUp(
                extractFetchUserRegistrationParams(this),
            )

            /*if (this.serverActionLogin.isFailureResponse(response)) {
                return false
            }*/
            storeInstance.confirm.setResult(response.data.id)
            // await storeInstance.session.checkIsLogged(response.data.data.auth_token, this.fields.rememberMe.value);
            //this.reset()
            //this.serverActionLogin.complete()
            return true
        } catch (e) {
            // ErrorUtils.handleError(e, this.serverActionLogin, true);
            return false;
        }
    }
}
