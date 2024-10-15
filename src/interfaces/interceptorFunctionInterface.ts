import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestInterceptorFulfilled = (
  value: AxiosRequestConfig
) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
export type AxiosResponseInterceptorFulfilled = (
  value: AxiosResponse
) => AxiosResponse | Promise<AxiosResponse>;
export type OnFailed = (error: AxiosError) => unknown;
export type RequestInterceptor = [RequestInterceptorFulfilled?, OnFailed?];
export type ResponseInterceptor = [
  AxiosResponseInterceptorFulfilled?,
  OnFailed?
];