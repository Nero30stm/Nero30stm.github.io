import {action, computed, makeObservable, observable} from "mobx";
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import fetchUserLogin, {extractFetchUserLoginParams} from '../../../src/requests/user/fetchUserLogin'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
import {reaction} from "mobx";
import {storeInstance} from "../../AppStore";
import {
    fetchUserProfile,
    setUserProfile,
    extractFetchUserSetParams,
    setUserCareer
} from "../../../src/requests/user/fetchUserProfile";
import {fetchUserCompany} from "../../../src/requests/user/fetchUserRegistration";
import {extractFetchUserSetCareerParams} from "../../../src/requests/user/fetchUserProfile";


export default class CareerFormModel extends FormModel {
    //@observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    fields: {
        dateFrom: FieldModel<string>
        dateTo: FieldModel<string>
    }

    @observable.ref company: any

    constructor() {
        super();
        makeObservable(this)
        this.fields = {
            dateFrom: new FieldModel('', [ValidationRules.required]),
            dateTo: new FieldModel('', [ValidationRules.required]),
        };

        this.company= {}
        this.onChangeReaction = reaction(() => this.company, () => {
            console.log(this.company)}
        )
    }


    @computed
    get companyName() {
        return this.company.name;
    }

    @action
    hydrate(data: any) {
        this.fields.dateFrom.init(data.dateFrom);
        this.fields.dateTo.init(data.dateTo)
        this.company = data.company
    }

    @action
    hydrateCompany(company: any) {
        this.company = company
    }

    reset() {
        this.company = {}
        this.fields.dateFrom.value = ''
        this.fields.dateFrom._value = ''
        this.fields.dateTo.value = ''
        this.fields.dateTo._value = ''
    }

    @action
    async fetchProfile() {
        try {
            //this.serverActionSave.pending();
            if (typeof window !== 'undefined') {
               //
                // const response = await fetchUserCompany(sessionStorage.getItem('auth_token'));
            }
           // console.log(response)

            /*if (response.success) {
                this.hydrate(response);
            }

            if (this.serverActionSave.isFailureResponse(response)) {
                return;
            }*/

            return true;
        } catch (e) {
            //ErrorUtils.handleError(e, this.serverAction, true);
            return false;
        }
    }

    async setCareer() {
        try {
            let response = {}
            //this.serverActionSave.pending();

            await setUserCareer(sessionStorage.getItem('auth_token'), extractFetchUserSetCareerParams(this));
            await fetchUserProfile(
                sessionStorage.getItem('auth_token'),
            )

            //if (this.serverActionSave.isFailureResponse(response)) {
            //return;
            //}

            return true;
        } catch (e) {
            //ErrorUtils.handleError(e, this.serverAction, true);
            return false;
        }
    }
}

export const career = new CareerFormModel()
