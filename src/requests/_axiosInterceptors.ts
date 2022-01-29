import API, { TDefaultResponse } from "./_axios";
//import ErrorUtils, { ProjectError } from "@utils/ErrorUtils";
import { AxiosResponse } from "axios";

export function createInterceptorResponse() {
    return function interceptorResponse(
        response: AxiosResponse<TDefaultResponse<any>>
    ) {
        if (response.status === (400 || 404 || 500 || 502)) {
            ErrorUtils.handleError(
                new ProjectError({
                    statusCode: response.status,
                    message: response.data.data.message,
                    pid: response.data.pid,
                })
            );
            return;
        }
        return response;
    };
}

export function createInterceptorBeforeRequest(tokenGetter?: () => string) {
    return function interceptorBeforeRequest(request: any) {
        const token = tokenGetter && tokenGetter();

        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
        }

        return request;
    };
}
