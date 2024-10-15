import { Axios } from "axios";
import type { AxiosInstance } from "axios";
import {
  API_REQUEST_INTERCEPTORS,
  API_RESPONSE_INTERCEPTORS,
} from "@/injectableTokens";
import type {
  RequestInterceptor,
  ResponseInterceptor,
} from "@/interfaces/interceptorFunctionInterface";
import { injectable,inject } from "inversify";

@injectable()
export class InterceptorHandlers {
  constructor(
    @inject(Axios) private axios: AxiosInstance,
    @inject(API_REQUEST_INTERCEPTORS)
    private requestInterceptors: RequestInterceptor[],
    @inject(API_RESPONSE_INTERCEPTORS)
    private responseInterceptors: ResponseInterceptor[]
  ) {
    
  }

  public init() {
    this.initRequestInterceptors();
    this.initResponseInterceptors();
  }

  public initRequestInterceptors() {
    for (const interceptor of this.requestInterceptors) {
      if (interceptor != undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.axios.interceptors.request.use(...interceptor);
      }
    }
  }

  public initResponseInterceptors() {
    for (const interceptor of this.responseInterceptors) {
      this.axios.interceptors.response.use(...interceptor);
    }
  }
}
