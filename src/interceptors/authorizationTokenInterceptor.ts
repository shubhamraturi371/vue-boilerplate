import type {
  RequestInterceptor,
  ResponseInterceptor,
} from "@/interfaces/interceptorFunctionInterface";
import {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
  type AxiosResponse,
} from "axios";
import { ApiCallService } from "@/services/apiCallService";
import { container } from '@/container/container'

export const AuthorizationTokenInterceptor: RequestInterceptor = [
  (requestConfig: AxiosRequestConfig) => {
    const apiCallService = container.resolve(ApiCallService) as ApiCallService;
    if (requestConfig.url?.includes(apiCallService.apiVersion())) {
      (requestConfig.headers as AxiosRequestHeaders).Accept = `application/json`;
       // set your other header here.
    }
    return requestConfig as AxiosRequestConfig;
  },
];
// if error is not unauthorized then let it return as it is
// if error is the unauthorized exception then keep a count of refresh token success attempts
// fetch new token using refresh token (if refresh token attempt fails then exit the system)
// using the new tokens retry the current failed request mapped to response and update count of attempts
// if still getting unauthorized and attempts are not exhausted then retry the same flow
// if attempts get exhausted then exit the system
// const originalRequest = response.config;

export const UnAuthorizationResponseInterceptor: ResponseInterceptor = [
  async (response: AxiosResponse) => {
    return response as AxiosResponse;
  },
  async (error: AxiosError) => {
  console.log(error)
       // Un authorization header here
  },
];
