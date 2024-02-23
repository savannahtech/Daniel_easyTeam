import {ExceptionFilter, Catch, ArgumentsHost, HttpStatus} from '@nestjs/common';
import { Response } from 'express';
import {ApiResponseBuilder} from "../shared/responses/api.response";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception?.getStatus ? exception?.getStatus() : exception?.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception?.response?.message || "SERVER ERROR!!"

    const buildResponse = ApiResponseBuilder.exception(message).setStatusCode(status).build();

    response.status(status).json(buildResponse);
  }
}