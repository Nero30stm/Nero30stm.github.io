import { action, observable, makeObservable } from 'mobx'
import ServerActionModel from './ServerActionModel'
import dynamic from 'next/dynamic';
const cookie = dynamic(
    () => import('js-cookie'), { ssr: false });
import {fetchUserProfile} from "../src/requests/user/fetchUserProfile";

export const SESSION_TOKEN_KEY = 'session_token'

export default class SessionModel {
  serverActionChecking: ServerActionModel
  @observable isLogged: boolean
  //role: string

  constructor() {
    makeObservable(this)
    this.isLogged = false

    this.serverActionChecking = new ServerActionModel('pending')
  }

  protected onChangeExpressionOfReaction = () => {
    return [this.isLogged]
  }

  static get getIsLogged() {
    return this.isLogged
  }

  @action
  updateIsLogged(value: boolean) {
    this.isLogged = value
  }

  @action
  async checkIsLogged(authToken?: string, rememberMe?: boolean) {
    console.log('checkIsLogged')
    try {
      SessionModel.saveToken(authToken, rememberMe)
      if (!SessionModel.getToken()) {
        return false
      }
      this.serverActionChecking.pending()
      const response = await fetchUserProfile(
        sessionStorage.getItem('auth_token'),
      )
      console.log(response)
      if (!response.success) {
        //SessionModel.removeToken()
      }

      //this.updateIsLogged(response.success)
      this.updateIsLogged(true)
      //this.role = response.role
      this.serverActionChecking.complete()
    } catch (error) {
      console.error(error)
      this.serverActionChecking.error()
      // ErrorUtils.handleError(error, this.serverActionChecking)
    }
  }

  // @action
  // async logout() {
  //     try {
  //         this.isLogged = false;
  //         await fetchUserLogout({auth_token: SessionModel.getToken()});
  //         SessionModel.removeToken();
  //     } catch (e) {
  //         // ErrorUtils.handleError(e);
  //     }
  // }

  static saveToken(token: string, rememberMe?: boolean) {
    if (token) {
      /*if (rememberMe) {
        cookie.set(SESSION_TOKEN_KEY, token, { expires: 365 })
      } else {*/
        cookie.set(SESSION_TOKEN_KEY, token)
      //}
    }
  }

  static getToken() {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('auth_token')
    }
  }

  static removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sessionToken')
      sessionStorage.removeItem('sessionToken')
    }
  }
}
