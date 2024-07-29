import { AxiosError, AxiosResponse } from 'axios';
import { MutationCache, QueryClient } from 'react-query';
import { showAlert } from '../components/alerts';
import { errorMessages } from '../utils/ErrorMessages';
import { ALERT_TYPES } from '../utils/enums';
export interface CustomAxiosError extends AxiosError {
    response: AxiosResponse & {
        data: unknown
    }
}
export function mutationErrorHandler(error: unknown): void {
    const errorTitle = (error as CustomAxiosError).response?.data?.title;
    const code = (error as CustomAxiosError)!.code
    if (errorTitle) {
        showAlert(errorTitle, ALERT_TYPES.ERROR);
    }
    else if (code && errorMessages[code]) {
        showAlert(errorMessages[code], ALERT_TYPES.ERROR);
    }
    else {
        showAlert("error", ALERT_TYPES.ERROR);
    }
}
export function mutationSuccessHandler(): void {
    showAlert("success", ALERT_TYPES.SUCCESS);
}
export const defaultStaleTime = 20 * 1000;
export const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onError: (error) => {
            mutationErrorHandler(error)
        },
    }),
    defaultOptions: {
        queries: {
            staleTime: defaultStaleTime,
            cacheTime: defaultStaleTime,
            refetchOnMount: true,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false
        }
    },
});