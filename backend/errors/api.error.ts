export class ApiError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors: Error[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message: string, errors: Error[] = []) {
        return new ApiError(400, message, errors);
    }

    static Unauthorized() {
        return new ApiError(401, 'User not authorized');
    }

    static NotFound() {
        return new ApiError(404, 'Page not found');
    }
}