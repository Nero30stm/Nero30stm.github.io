import {action, makeObservable, observable, reaction} from 'mobx'
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import {
    fetchUserSignUp,
    extractFetchUserRegistrationParams, fetchUserConfirm,
} from '../../../src/requests/user/fetchUserRegistration'
import ReactionModel from '../../ReactionModel'
import ValidationRules from "../../../src/utils/ValidationRules";
import {storeInstance} from "../../AppStore";
import {extractFetchUserRegistrationCompanyParams} from "../../../src/requests/user/fetchUserRegistration";

export default class ConfirmFormModel extends FormModel {
    @observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: ReactionModel

    request: {
        userId: string
        confirmationCode: string
    }
    @observable response: boolean
    fields: any
    fieldsLength = 6;

    constructor() {
        super()
        makeObservable(this)
        this.serverActionLogin = new ServerActionModel('')

        this.request = {
            userId : '',
            confirmationCode: ''
        }

        this.response = false

        this.fields = []

        for (let i = 0; i < this.fieldsLength; i++) {
            this.fields.push(new FieldModel('', [ValidationRules.required]))
        }


        this.validate();

        this.onChangeReaction = reaction(
            () => this.fields.map((field) => field.value),
            _=> {this.validate(); this.isValid? this.sendRequest(): console.log('not valid')}
        )
    }

    setResult(userId) {
        console.log('user')
        console.log(userId)
        this.request.userId = userId;
    }

    async sendRequest() {
        this.request.confirmationCode = ''
        this.fields.map((field, i) => {
            if (i === this.fields.length/2) {
                this.request.confirmationCode += '-'
            }
            this.request.confirmationCode += field.value;
            console.log(this.request)
        })
        this.response = await this.fetchRegistration();
    }

    protected onChangeExpressionOfReaction() {
        return Object.values(this.fields).map((field) => field.value)
    }

    @action
    async fetchRegistration() {
        try {
            //this.serverActionLogin.pending()
            const response = await fetchUserConfirm(
                this.request
            )

            /*if (this.serverActionLogin.isFailureResponse(response)) {
                return false
            }*/
            // await storeInstance.session.checkIsLogged(response.data.data.auth_token, this.fields.rememberMe.value);
            //this.reset()
            //this.serverActionLogin.complete()
            storeInstance.personal.setResult(this.request.userId, this.request.confirmationCode)
            return true
        } catch (e) {
            // ErrorUtils.handleError(e, this.serverActionLogin, true);
            return false;
        }
    }
}