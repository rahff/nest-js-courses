import { ExceptionFilter, HttpException, Catch, ArgumentsHost  } from "@nestjs/common";
import { Response, Request } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const statusCode = exception.getStatus();
        return response.status(statusCode).json({
            status: statusCode,
            message: exception.message,
            createdBy: "HttpExceptionFilter"
        })
    }
}

@Catch()
export class FallBackExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        return response.status(500).json({
            status: 500,
            message: exception.message,
            createdBy: "FallBackExceptionFilter"
        })
    }
}