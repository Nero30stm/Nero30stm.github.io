import {action, makeObservable, observable, reaction} from 'mobx'
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import {
    fetchUserPersonal,
} from '../../../src/requests/user/fetchUserRegistration'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
import {storeInstance} from "../../AppStore";
import {extractFetchUserRegistrationPersonParams} from "../../../src/requests/user/fetchUserRegistration";

export default class PersonalFormModel extends FormModel {
    @observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: ReactionModel

    request: {
        userId: string
        confirmationCode: string
    }

    fields: {
        userId: FieldModel<string>
        confirmationCode: FieldModel<string>
        firstname: FieldModel<string>
        lastname: FieldModel<string>
        login: FieldModel<string>
    }

    constructor() {
        super()
        makeObservable(this)
        this.serverActionLogin = new ServerActionModel('')

        this.fields = {
            firstname: new FieldModel('', [ValidationRules.required]),
            lastname: new FieldModel('', [ValidationRules.required]),
            login: new FieldModel('', [ValidationRules.required]),
        }

        this.validate();

        this.request = {
            userId : '',
            confirmationCode: ''
        }

        this.onChangeReaction = reaction(
            () => Object.values(this.fields).map((field) => field.value),
            _=> {this.validate()}
        )
    }

    setResult(userId, confirmationCode) {
        this.request.userId = userId;
        this.request.confirmationCode = confirmationCode
    }

    protected onChangeExpressionOfReaction() {
        return Object.values(this.fields).map((field) => field.value)
    }

    @action
    async fetchRegistration() {
        try {
            this.serverActionLogin.pending()
            const response = await fetchUserPersonal(extractFetchUserRegistrationPersonParams(this)
            )

            if (this.serverActionLogin.isFailureResponse(response)) {
                return false
            }
            // await storeInstance.session.checkIsLogged(response.data.data.auth_token, this.fields.rememberMe.value);
            this.reset()
            this.serverActionLogin.complete()
            return true
        } catch (e) {
            // ErrorUtils.handleError(e, this.serverActionLogin, true);
            return false;
        }
    }
}
