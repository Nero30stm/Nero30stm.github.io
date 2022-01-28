import axios from "axios";
import { CONFIG } from "../../CONFIG";
import qs from "qs";
import {
    createInterceptorBeforeRequest,
    createInterceptorResponse,
} from "./_axiosInterceptors";
import SessionModel from "../../stores/SessionModel";

const API = axios.create({
    baseURL: CONFIG.BASE_URL,
    validateStatus: (status) => {
        return true;
    },
    headers: {
        //"Content-Type": "multipart/form-data",
    },
});

API.defaults.paramsSerializer = function (params) {
    return qs.stringify(params);
};

API.interceptors.response.use(createInterceptorResponse());
API.interceptors.request.use(
    createInterceptorBeforeRequest(() => SessionModel.getToken()),
    (error) => Promise.reject(error)
);

export type TDefaultResponse<DATA> = {
    code: number;
    data: DATA;
    pid: string;
};
export default API;
