import ServerActionModel from "../../stores/ServerActionModel";
//import { modalModel } from "../stores/_common/ui/ModalModel";
export const NETWORK_ERROR = "Network Error";

export class ProjectError extends Error {
    pid: string;
    statusCode: number;

    static INTERNET_PROBLEM = "connection_problem";

    constructor(options?: {
        message: string;
        statusCode?: number;
        problem?: string;
        pid?: string;
    }) {
        super(options?.message);
        this.pid = options?.pid;
        this.statusCode = options?.statusCode;
    }
}

export default class ErrorUtils {
    static CANCEL_MESSAGE = "cancel-fetch-error";

    static handleError(
        error: Error | ProjectError,
        serverAction?: ServerActionModel,
        doNotNotify: boolean = false
    ) {
        if (error?.message === ErrorUtils.CANCEL_MESSAGE) {
            return;
        }
        if (error?.message === NETWORK_ERROR) {
            console.warn(NETWORK_ERROR);
        } else if ("statusCode" in error === false) {
            console.warn(error);
            /*modelInstance.error(
                "pid" in error ? error.pid : null,
                error.message,
                error.name
            );*/
            setTimeout(() => {
               // modalModel.openNotification();
            }, 0);
        } else if ("statusCode" in error) {
            console.warn(error);
            /*modelInstance.projectError(
                "pid" in error ? error.pid : null,
                error.statusCode
            );*/
            //modalModel.openModal();
        }
        if (serverAction) {
            serverAction.error(error);
        }
    }
}
