// src/StatusServer.ts
export class StatusServer {
    private readonly status: Record<string, { code: number; message: string }> = {
      CREATED: { code: 201, message: 'Resource Created Successfully' },
      UPDATED: { code: 200, message: 'Resource Updated Successfully' },
      DELETED: { code: 200, message: 'Resource Deleted Successfully' },
      ALREADY_EXISTS: { code: 409, message: 'Resource Already Exists' },
      INVALID: { code: 422, message: 'Invalid Data Provided' },
    };
  
    public getStatus(type: string, message?: string) {
      const statusType = this.status[type];
      if (!statusType) {
        throw new Error(`Status type "${type}" not found.`);
      }
      return {
        code: statusType.code,
        message: message || statusType.message,
      };
    }
  }