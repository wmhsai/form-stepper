import { AxiosError, AxiosResponse } from 'axios';
import { MutationCache, QueryClient } from 'react-query';
export interface CustomAxiosError extends AxiosError {
    response: AxiosResponse & {
        data: unknown
    }
}

export const defaultStaleTime = 20 * 1000;
export const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onError: () => { },
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