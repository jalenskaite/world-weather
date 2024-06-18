export class ApiError extends Error {
  public statusCode: number;

  constructor(message: string, public data?: any, statusCode: number = 500) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
