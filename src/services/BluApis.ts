import { axiosInstance } from "../auth/axiosInstance";
import { METHOD } from "../utils/enums";
import { BaseUrl } from "../utils/urls";

const getAllBlu = () => {
    return axiosInstance({
        method: METHOD.GET,
        url: `${BaseUrl}/data`,
    }).then((res) => res.data)
};

export const BluAPIs = {
    getAllBlu,

};