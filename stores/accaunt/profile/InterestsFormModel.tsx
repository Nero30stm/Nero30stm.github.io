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
    setUserCareer, extractFetchUserSetSkillsParams, setUserSkills, extractFetchUserSetInterestsParams, setUserInterests
} from "../../../src/requests/user/fetchUserProfile";
import {fetchUserCompany} from "../../../src/requests/user/fetchUserRegistration";
import {extractFetchUserSetCareerParams} from "../../../src/requests/user/fetchUserProfile";


export default class InterestsFormModel extends FormModel {
    //@observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    @observable.ref interest: any

    constructor() {
        super();
        makeObservable(this)

        this.interest= {}
        this.onChangeReaction = reaction(() => this.interest, () => {
            console.log(this.interest)}
        )
    }


    @computed
    get interestName() {
        return this.interest.name;
    }

    @action
    hydrate(data: any) {
        this.interest = data
    }


    reset() {
        this.interest = {}
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

    async setInterests() {
        try {
            let response = {}
            //this.serverActionSave.pending();

            await setUserInterests(sessionStorage.getItem('auth_token'), extractFetchUserSetInterestsParams(this));
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

export const interests = new InterestsFormModel()
