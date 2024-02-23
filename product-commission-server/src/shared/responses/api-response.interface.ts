import {ApiResponse} from "./api.response";

export interface IApiResponseBuilder {
  seData?(data: object): ApiResponse
  setMessage?(value: string): ApiResponse;
  setMeta?(value: object): ApiResponse;
  setStatus?(value: boolean): ApiResponse;
  setStatusCode?(value: number): ApiResponse
  default?(): ApiResponse;
}

export interface IApiResponse<T> {
  message?: string;
  status?: boolean;
  statusCode?: number;
  meta?: object;
  data?: T
}