import {HttpStatus} from "@nestjs/common";
import {IApiResponseBuilder} from "./api-response.interface";
import {ResponseStatus} from "./api-response.enum";

export class ApiResponse implements IApiResponseBuilder {
  private readonly data;

  constructor() {
    this.data = new Map();
  }

  private reset(): ApiResponse {
    this.data.clear();
    return this;
  }

  public setData(value: object): ApiResponse {
    this.data.set("data", value);
    return this;
  }

  public setMessage(value: string): ApiResponse {
    this.data.set("message", value);
    return this;
  }

  public setStatus(value: boolean): ApiResponse {
    this.data.set("status", value);
    return this;
  }

  public setStatusCode(value: HttpStatus): ApiResponse {
    this.data.set("statusCode", value);
    return this;
  }

  public setMeta(value: object): ApiResponse {
    this.data.set("meta", value);
    return this;
  }

  public default(): ApiResponse {
    this.setMessage(ResponseStatus.SUCCESS).setStatus(true).setStatusCode(HttpStatus.OK);
    return this;
  }

  public exception(e: string): ApiResponse {
    this.reset().setMessage(e || ResponseStatus.FAILED).setStatus(false).setStatusCode(HttpStatus.BAD_REQUEST);
    return this;
  }

  public build() {
    return Object.fromEntries(this.data);
  }
}

export const ApiResponseBuilder = new ApiResponse();