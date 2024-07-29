import axios from 'axios';

type Method =
    | "get"
    | "delete"
    | "post"
    | "put"
    | "patch"
interface Api {
    url: string;
    method: Method;
    params?: object;
    data?: object | string;
    Authorization?: string;
    ContentType?: string;
    ApiKey?: string;
}

const instance = axios.create({});

export function axiosInstance(apiParams: Api) {
    return instance({
        method: apiParams.method?.toUpperCase(),
        url: apiParams.url,
        params: apiParams.params,
        data: apiParams.data,
    })
}