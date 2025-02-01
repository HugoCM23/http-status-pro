// src/ErrorServer.ts
export class ErrorServer extends Error {
    public code: number;
    public error: string;
  
    private readonly errors: Record<string, { code: number; message: string }> = {
      SERVER: { code: 500, message: 'Internal Server Error' },
      DRIVER: { code: 503, message: 'Service Unavailable' },
      BAD_REQUEST: { code: 400, message: 'Bad Request' },
      UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
      NOT_FOUND: { code: 404, message: 'Not Found' },
      EXIST: { code: 409, message: 'Conflict' },
    };
  
    constructor(type: string, message?: string) {
      super(message || 'without trace');
      const errorType = this.errors[type];
      if (!errorType) {
        throw new Error(`Error type "${type}" not found.`);
      }
      this.code = errorType.code;
      this.error = errorType.message;
    }
  }