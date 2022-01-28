import {action, computed, observable} from "mobx";
// import ErrorUtils, {ProjectError} from "@utils/ErrorUtils";
import _ from 'lodash';

type TServerActionStatuses =
    typeof ServerActionModel.ACTION_PENDING
    | typeof ServerActionModel.ACTION_COMPLETE
    | typeof ServerActionModel.ACTION_ERROR
    | '';

export default class ServerActionModel {
    static ACTION_PENDING = 'pending';
    static ACTION_COMPLETE = 'complete';
    static ACTION_ERROR = 'error';
    @observable status: TServerActionStatuses;
    @observable.shallow messages: string[];
    @observable pid: string;
    @observable statusCode: number;

    constructor(
        status: TServerActionStatuses
    ) {
        this.status = status;
        this.messages = [];
        this.pid = '';
        this.statusCode = 0;
    }

    @computed
    get firstMessage() {
        return _.first(this.messages);
    }

    @computed
    get isComplete() {
        return this.status === ServerActionModel.ACTION_COMPLETE;
    }

    @computed
    get isError() {
        return this.status === ServerActionModel.ACTION_ERROR;
    }

    @computed
    get isPending() {
        return this.status === ServerActionModel.ACTION_PENDING;
    }

    @computed
    get isEmpty() {
        return this.status === '';
    }

    @action
    setMessages(messages?: string | string[] | Error) {
        if (Array.isArray(messages)) {
            this.messages = messages;
            this.pid = '';
        } else if (messages instanceof Error) {
            this.messages = [messages.message];
        } else if (!!messages) {
            this.messages = [messages];
            this.pid = '';
        }
    }

    @action
    pending(messages?: string | string[]) {
        this.status = ServerActionModel.ACTION_PENDING;
        this.setMessages(messages);
    }

    @action
    complete(messages?: string | string[]) {
        this.status = ServerActionModel.ACTION_COMPLETE;
        this.setMessages(messages);
    }

    @action
    error(error?: string | string[] | Error) {
        this.status = ServerActionModel.ACTION_ERROR;
        this.setMessages(error);
    }

    @action
    empty() {
        this.status = '';
        this.setMessages('');
    }

    @action
    isFailureResponse(response: any) {
        if (response.status != 200) {
            // ErrorUtils.handleError(new ProjectError({
            //     message: response?.data?.data?.message,
            //     pid: response?.data?.pid
            // }));
            //this.error(response?.data?.data?.message || '');
            return true;
        }
        return false;
    }

    @action
    reset() {
        this.status = '';
        this.pid = '';
        this.messages = [];
    }
}