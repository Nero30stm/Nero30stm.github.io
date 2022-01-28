import { action, observable } from 'mobx'
import SessionModel from './SessionModel'
import LoginFormModel from "./accaunt/login/LoginFormModel";
import SignUpFormModel from "./accaunt/registration/SignUpFormModel";
import ConfirmFormModel from "./accaunt/registration/ConfirmFormModel";
import PersonalFormModel from "./accaunt/registration/PersonalFormModel";
import CompanyFormModel from "./accaunt/registration/CompanyFormModel";
import ProfileFormModel from "./accaunt/profile/ProfileFormModel";
import { useStaticRendering } from "mobx-react";
import ProfileMainModel from "./accaunt/ProfileMainModel";
import {fetchUserProfile} from "../src/requests/user/fetchUserProfile";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class AppStore {
  session: SessionModel
  login: LoginFormModel
  profile: ProfileFormModel

  // формы регистрации
  signup: SignUpFormModel
  confirm: ConfirmFormModel
  personal: PersonalFormModel
  company: CompanyFormModel

  mainInf: ProfileMainModel

  @observable
  isPending: boolean

  constructor() {
    let l =
    this.session = new SessionModel()
    this.login = new LoginFormModel()
    this.signup = new SignUpFormModel()
    this.confirm = new ConfirmFormModel()
    this.personal = new PersonalFormModel()
    this.company = new CompanyFormModel()
    this.profile = new ProfileFormModel()
    this.mainInf = new ProfileMainModel()

    this.isPending = false
  }

  componentDidMount() {
    this.isPending = false
  }


  @action.bound
  async initialize() {
    if (SessionModel.getToken()) {
      await this.session.checkIsLogged()
    }
    this.isPending = false
  }
}

export default AppStore

export const storeInstance: AppStore = new AppStore();