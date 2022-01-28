import { action, computed, observable } from "mobx";
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import fetchUserLogin, {extractFetchUserLoginParams} from '../../../src/requests/user/fetchUserLogin'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
import {reaction} from "mobx";
import {storeInstance} from "../../AppStore";
import {fetchUserProfile, setUserProfile, extractFetchUserSetParams} from "../../../src/requests/user/fetchUserProfile";


export default class ProfileFormModel extends FormModel {
    //@observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    fields: {
        firstname: FieldModel<string>
        patronymic: FieldModel<string>
        lastname: FieldModel<string>
        login: FieldModel<string>
        birthDate: FieldModel<string>
        sex: FieldModel<number>
        personStatusId: FieldModel<number>
        countryWikiDataId: FieldModel<string>
        regionWikiDataId: FieldModel<string>
        cityWikiDataId: FieldModel<string>
        disability: FieldModel<boolean>
        disabilities: FieldModel<string>

        country: FieldModel<any>
        region: FieldModel<any>
        city: FieldModel<any>
    }

    statusOptions: any;
    disabilitisOptions: any;

    constructor() {
        super();
        this.fields = {
            firstname: new FieldModel('', [ValidationRules.required]),
            patronymic: new FieldModel('', []),
            lastname: new FieldModel('', [ValidationRules.required]),
            birthDate: new FieldModel('', []),
            login: new FieldModel('', [ValidationRules.required]),
            patronymic: new FieldModel('', []),
            sex: new FieldModel(undefined, []),
            personStatusId: new FieldModel(undefined, []),
            countryWikiDataId: new FieldModel('', []),
            regionWikiDataId: new FieldModel('', []),
            cityWikiDataId: new FieldModel('', []),
            disability: new FieldModel(false, []),
            disabilities: new FieldModel('false', []),

            country: new FieldModel({}, []),
            region: new FieldModel({}, []),
            city: new FieldModel({}, []),
        };

       this.statusOptions= [];
       this.disabilitisOptions= [];

        this.validate();

        this.onChangeReaction = reaction(
            () => Object.values(this.fields).map((field) => field.value),
            _=> {this.validate(); this.checkValidation()}
        )
    }

    protected checkValidation() {
        if (this.fields.country.value != '' || this.fields.country._value != ''){
            this.fields.region.validator.errors.push('Заполните это поле')
            this.fields.city.validator.errors.push('Заполните это поле')
        }

        if (this.isValid === true && this.fields.birthDate.value > '01.01.1920'){
            this.disabled = false;
        }
        else {
            this.disabled = true
        }
    }

    @computed
    get initFullName() {
        return [
            this.fields.firstname._value,
            this.fields.lastname._value,
        ].join(" ");
    }

    @action
    hydrate(data: any) {
        this.fields.firstname.init(data.firstname)
        this.fields.lastname.init(data.lastname)
        this.fields.login.init(data.login)
        this.fields.patronymic.init(data.patronymic)
        this.fields.birthDate.init(data.birthDate)
        this.fields.countryWikiDataId.init(data.countryWikiDataId)
        this.fields.regionWikiDataId.init(data.regionWikiDataId)
        this.fields.cityWikiDataId.init(data.cityWikiDataId)
        this.fields.sex.init(data.sex)
        this.fields.personStatusId.init(data.personStatusId)
        this.fields.disability.init(data.disability)

        this.fields.country.init(data.location.country)
        this.fields.region.init(data.location.region)
        this.fields.city.init(data.location.city)
    }

    @action
    async fetchProfile() {
        let response
        try {
            //this.serverActionSave.pending();
            if (typeof window !== 'undefined') {
                response = await fetchUserProfile(sessionStorage.getItem('auth_token'));
            }
            console.log(response)

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

    async setProfile() {
        try {
            //this.serverActionSave.pending();

            let response
            console.log(sessionStorage.getItem('auth_token'))

            if (typeof window !== 'undefined') {
                response = await setUserProfile(sessionStorage.getItem('auth_token'), extractFetchUserSetParams(this));
            }

            console.log(response)

            /*
            if (response.success) {
                console.log('change sucsess')
                this.hydrate(response);
            }*/

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
