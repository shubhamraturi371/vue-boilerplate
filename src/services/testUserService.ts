import {ApiCallService} from "@/services/apiCallService";
import {inject, injectable} from "inversify";
import type { AxiosInstance } from "axios";
import { Axios } from "axios";


@injectable()
export class TestUserService {
  constructor(
    @inject(ApiCallService) public apiCallService: ApiCallService,
    @inject(Axios) public axios: AxiosInstance,
  ) {

  }

  public list(
  ) {
    return this.axios
      .get(
        this.apiCallService.apiUrl("users"),
      )
      .then((result) => {
        return result.data?.data;
      });
  }
}
