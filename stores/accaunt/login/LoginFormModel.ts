import { action, observable, makeObservable } from 'mobx'
import ServerActionModel from '../../ServerActionModel'
import FormModel from '../../form/FormModel'
import FieldModel from '../../form/FieldModel'
import fetchUserLogin, {extractFetchUserLoginParams} from '../../../src/requests/user/fetchUserLogin'
import ValidationRules from '../../../src/utils/ValidationRules'
import ReactionModel from '../../ReactionModel'
//import storeInstance from '../../_instance'
import {reaction} from "mobx";

export default class LoginFormModel extends FormModel {
  @observable.ref serverActionLogin: ServerActionModel
  readonly onChangeReaction: any

  fields: {
    email: FieldModel<string>
    password: FieldModel<string>
  }

  constructor() {
    super()
    makeObservable(this)
    this.serverActionLogin = new ServerActionModel('')
    this.fields = {
      email: new FieldModel('', [
        ValidationRules.required,
        //ValidationRules.email,
      ]),
      password: new FieldModel('', [ValidationRules.required]),
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
  async fetchLogin() {
    try {
      this.serverActionLogin.pending()
      const response = await fetchUserLogin(extractFetchUserLoginParams(this))
      console.log(response);

       if (this.serverActionLogin.isFailureResponse(response)) {
         return false
       }

       console.log(response)

      /*await storeInstance.session.checkIsLogged(
        response.data.token,
        this.fields.rememberMe.value,
      )*/

      this.reset()
      this.serverActionLogin.complete()//*/
      return true
    } catch (e) {
      // ErrorUtils.handleError(e, this.serverActionLogin, true);
      return false
    }
  }
}
