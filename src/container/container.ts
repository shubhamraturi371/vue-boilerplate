import { Container } from "inversify";
import axios, { Axios } from "axios";
import {
  API_REQUEST_INTERCEPTORS,
  API_RESPONSE_INTERCEPTORS,
  STORAGE_TOKEN,
} from "@/injectableTokens";
import {
  AuthorizationTokenInterceptor,
  UnAuthorizationResponseInterceptor,
} from "@/interceptors/authorizationTokenInterceptor";
import { AxiosErrorInterceptor } from "@/interceptors/axiosErrorInterceptor";
import type { RequestInterceptor, ResponseInterceptor } from "@/interfaces/interceptorFunctionInterface";
import { InterceptorHandlers } from "@/services/intercept-handler.service";
import { ApiCallService } from '@/services/apiCallService'


export const ContainerSymbol = Symbol("ContainerSymbol");
export const container = new Container({
  autoBindInjectable: true
});

container.bind(ApiCallService).to(ApiCallService).inSingletonScope();
container.bind(Axios).toConstantValue(axios.create());
container.bind(STORAGE_TOKEN).toConstantValue(window.localStorage);
container.bind(API_REQUEST_INTERCEPTORS).toConstantValue([AuthorizationTokenInterceptor] as RequestInterceptor[]);
container.bind(API_RESPONSE_INTERCEPTORS).toConstantValue([UnAuthorizationResponseInterceptor,AxiosErrorInterceptor] as ResponseInterceptor[]);
container.bind(InterceptorHandlers).to(InterceptorHandlers).inSingletonScope();
