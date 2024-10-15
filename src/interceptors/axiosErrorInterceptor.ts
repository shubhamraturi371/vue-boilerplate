import type { ResponseInterceptor } from '@/interfaces/interceptorFunctionInterface';
import { AxiosError, type AxiosResponse } from 'axios';

export const AxiosErrorInterceptor: ResponseInterceptor = [
    async (response: AxiosResponse) => {
        return response as AxiosResponse;
      },
      async (error: AxiosError) => {
        if (error.response && error.response.data) {
          const errorData = error.response.data as {error_description : string};
          if(errorData.error_description) console.log(errorData.error_description);
        } else if(error.response && error.response.status == 400) {
            console.log(error.message) // console your error
        }
        await Promise.reject(error);
        return error as AxiosError;
      },
  ];
