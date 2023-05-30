export interface IAdmin {
    username: string;
    password: string;
    name: string;
    surname: string;
    comparePassword(candidatePassword: string): boolean;
}