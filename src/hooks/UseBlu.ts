import { useQuery } from "react-query";
import { queryKeys } from "../reactQuery/Constants";
import { BluAPIs } from "../services/BluApis";

export const UseGetAllBlu = () => {
    return useQuery([queryKeys.Blu],
        () => BluAPIs.getAllBlu());
}
