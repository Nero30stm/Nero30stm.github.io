import {action, makeObservable, observable, reaction} from 'mobx'
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import {
    fetchUserCompany,
    fetchUserPersonal,
} from '../../../src/requests/user/fetchUserRegistration'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
import {storeInstance} from "../../AppStore";
import {extractFetchUserRegistrationCompanyParams} from "../../../src/requests/user/fetchUserRegistration";

export default class CompanyFormModel extends FormModel {
    @observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: ReactionModel

    fields: {
        userId: FieldModel<string>
        confirmationCode: FieldModel<string>
        orgName: FieldModel<string>
        countryWikiDataId: FieldModel<string>
    }

    constructor() {
        super()
        makeObservable(this)
        this.serverActionLogin = new ServerActionModel('')

        this.fields = {
            userId : new FieldModel('', []),
            confirmationCode: new FieldModel('', []),
            orgName: new FieldModel('', [ValidationRules.required]),
            countryWikiDataId: new FieldModel('', [ValidationRules.required]),
        }

        this.validate();

        this.onChangeReaction = reaction(
            () => Object.values(this.fields).map((field) => field.value),
            _=> {this.validate()}
        )
    }

    protected onChangeExpressionOfReaction() {
        return Object.values(this.fields).map((field) => field.value)
    }

    @action
    async fetchRegistration() {
        try {
            this.serverActionLogin.pending()
            const response = await fetchUserCompany(
                extractFetchUserRegistrationCompanyParams(this)
            )
            console.log(this.fields)
            console.log(response)

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
