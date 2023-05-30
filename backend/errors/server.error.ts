export class ServerError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors: Error[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError(errors: Error[] = []) {
        return new ServerError(500, 'Internal server error', errors);
    }
}