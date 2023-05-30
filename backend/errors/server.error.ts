export class ServerError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors: Error[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static InternalServerError(errors: Error[] = []) {
        return new ServerError(500, 'Internal server error', errors);
    }
}