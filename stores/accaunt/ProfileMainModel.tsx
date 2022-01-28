import {action, computed, makeObservable, observable} from "mobx";
import {
    fetchUserProfile,
    setUserProfile,
    extractFetchUserSetParams,
    deleteUserCareer,
    deleteUserSkill, deleteUserInterest
} from "../../src/requests/user/fetchUserProfile";

export class CareerModel {
    company: {}
    dateFrom: string
    dateTo: string

    constructor(obj: any) {
        this.company = obj.company
        this.dateFrom = obj.dateFrom
        this.dateTo = obj.dateTo
    }
}

export default class ProfileMainModel{
    //@observable.ref serverActionLogin: ServerActionModel
    readonly onChangeReaction: any

    @observable.ref
    mainInf: {
        isFull: boolean
        email: string
        firstname: string
        patronymic: string
        lastname: string
        login: string
        birthDate: string
        phone: string
        sex: number
        personStatusId: number
        countryWikiDataId: string
        regionWikiDataId: string
        cityWikiDataId: string
        disability: boolean
        disabilities: string

        country: any
        region: any
        city: any
    }

    @observable careerInf: any
    @observable skillsInf: any
    @observable interestsInf: any

    @observable photo: string

    constructor() {
        makeObservable(this)
        this.mainInf = {
            isFull: false,
            email: '',
            firstname: '',
            patronymic: '',
            lastname: '',
            birthDate: '',
            phone: '',
            login: '',
            patronymic: '',
            sex: undefined,
            personStatusId: undefined,
            countryWikiDataId: '',
            regionWikiDataId: '',
            cityWikiDataId: '',
            disability: false,
            disabilities: '',

            country: {},
            region: {},
            city: {}
        };

        this.careerInf = []
        this.skillsInf = []
        this.interestsInf = []
        this.photo= ''
    }

    @computed
    get initFullName() {
        return [
            this.mainInf.firstname,
            this.mainInf.lastname,
        ].join(" ");
    }

    @action
    hydrateMainInf(data: any) {
        this.mainInf.email = data.email;
        this.mainInf.firstname = data.firstname;
        this.mainInf.lastname = data.lastname;
        this.mainInf.login = data.login;
        this.mainInf.patronymic = data.patronymic;
        this.mainInf.birthDate = data.birthDate;
        this.mainInf.phone = data.phone;
        this.mainInf.countryWikiDataId = data.countryWikiDataId;
        this.mainInf.regionWikiDataId = data.regionWikiDataId;
        this.mainInf.cityWikiDataId = data.cityWikiDataId;
        this.mainInf.sex = data.sex;
        this.mainInf.personStatusId = data.personStatusId;
        this.mainInf.disability = data.disability;

        console.log(this.mainInf.birthDate && 'brd')



        this.mainInf.birthDate ? /*&& this.mainInf.personStatusId && this.mainInf.cityWikiDataId && this.mainInf.sex && this.mainInf.cityWikiDataId*/
            this.mainInf.isFull = true :
            this.mainInf.isFull = false
    }

    @action
    hydrateCareerInf(data: any) {
        this.careerInf.career = data.career
    }

    @action
    hydrate(data: any) {
        this.mainInf.email = data.email;
        this.mainInf.firstname = data.firstname;
        this.mainInf.lastname = data.lastname;
        this.mainInf.login = data.login;
        this.mainInf.patronymic = data.patronymic;
        this.mainInf.birthDate = data.birthDate;
        this.mainInf.phone = data.phone;
        this.mainInf.countryWikiDataId = data.countryWikiDataId;
        this.mainInf.regionWikiDataId = data.regionWikiDataId;
        this.mainInf.cityWikiDataId = data.cityWikiDataId;
        this.mainInf.sex = data.sex;
        this.mainInf.personStatusId = data.personStatusId;
        this.mainInf.disability = data.disability;
        this.careerInf = data.career;
        this.skillsInf = data.skills;
        this.interestsInf = data.interests;

        this.photo = data.photo

        this.mainInf.country = data.location.country
        this.mainInf.region = data.location.region
        this.mainInf.city = data.location.city

        this.mainInf.birthDate && this.mainInf.personStatusId /*&& this.mainInf.cityWikiDataId && this.mainInf.sex && this.mainInf.cityWikiDataId*/?
            this.mainInf.isFull = true :
            this.mainInf.isFull = false
    }

    async deleteCareer(id: number) {
        await deleteUserCareer(sessionStorage.getItem('auth_token'), id)
        await fetchUserProfile(sessionStorage.getItem('auth_token'));
    }

    async deleteSkill(id: number) {
        await deleteUserSkill(sessionStorage.getItem('auth_token'), id)
        await fetchUserProfile(sessionStorage.getItem('auth_token'));
    }

    async deleteInterest(id: number) {
        await deleteUserInterest(sessionStorage.getItem('auth_token'), id)
        await fetchUserProfile(sessionStorage.getItem('auth_token'));
    }

    setImg (img){
        this.photo = img
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

            if (typeof window !== 'undefined') {
                //const response = await setUserProfile(sessionStorage.getItem('auth_token'), extractFetchUserSetParams(this));
            }

            if (response.success) {
                console.log('change sucsess')
                this.hydrate(response);
            }

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
