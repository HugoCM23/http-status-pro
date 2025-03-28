export class StatusServer {
  private static readonly status: Record<string, { code: number; message: string }> = {
    CREATED: { code: 201, message: 'Resource Created Successfully' },
    UPDATED: { code: 200, message: 'Resource Updated Successfully' },
    DELETED: { code: 200, message: 'Resource Deleted Successfully' },
    ALREADY_EXISTS: { code: 409, message: 'Resource Already Exists' },
    INVALID: { code: 422, message: 'Invalid Data Provided' },
  };

  public static getStatus(
    status: { code: number; message: string },
    customMessage?: string
  ) {
    return {
      code: status.code,
      message: customMessage || status.message,
    };
  }

  public static get CREATED() {
    return this.status['CREATED'];
  }

  public static get UPDATED() {
    return this.status['UPDATED'];
  }

  public static get DELETED() {
    return this.status['DELETED'];
  }

  public static get ALREADY_EXISTS() {
    return this.status['ALREADY_EXISTS'];
  }

  public static get INVALID() {
    return this.status['INVALID'];
  }
}