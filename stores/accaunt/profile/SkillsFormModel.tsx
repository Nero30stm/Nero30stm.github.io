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
    setUserCareer, extractFetchUserSetSkillsParams, setUserSkills
} from "../../../src/requests/user/fetchUserProfile";
import {fetchUserCompany} from "../../../src/requests/user/fetchUserRegistration";
import {extractFetchUserSetCareerParams} from "../../../src/requests/user/fetchUserProfile";


export default class SkillsFormModel extends FormModel {
    //@observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    @observable.ref skill: any

    constructor() {
        super();
        makeObservable(this)

        this.skill= {}
        this.onChangeReaction = reaction(() => this.skill, () => {
            console.log(this.skill)}
        )
    }


    @computed
    get skillName() {
        return this.skill.name;
    }

    @action
    hydrate(data: any) {
        this.skill = data
    }


    reset() {
        this.skill = {}
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

    async setSkills() {
        try {
            let response = {}
            //this.serverActionSave.pending();

            await setUserSkills(sessionStorage.getItem('auth_token'), extractFetchUserSetSkillsParams(this));
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

export const skills = new SkillsFormModel()
