export class ErrorServer extends Error {
  public code: number;
  public error: string;

  private static readonly errors: Record<string, { code: number; message: string }> = {
    SERVER: { code: 500, message: 'Internal Server Error' },
    DRIVER: { code: 503, message: 'Service Unavailable' },
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
    NOT_FOUND: { code: 404, message: 'Not Found' },
    EXIST: { code: 409, message: 'Conflict' },
  };

  constructor(type: { code: number; message: string }, customMessage?: string) {
    super(customMessage || type.message);
    this.code = type.code;
    this.error = type.message;
  }

  public static get SERVER() {
    return this.errors['SERVER'];
  }

  public static get DRIVER() {
    return this.errors['DRIVER'];
  }

  public static get BAD_REQUEST() {
    return this.errors['BAD_REQUEST'];
  }

  public static get UNAUTHORIZED() {
    return this.errors['UNAUTHORIZED'];
  }

  public static get NOT_FOUND() {
    return this.errors['NOT_FOUND'];
  }

  public static get EXIST() {
    return this.errors['EXIST'];
  }
}