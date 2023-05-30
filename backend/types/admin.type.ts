export interface IAdmin {
    username: string;
    password: string;
    name: string;
    surname: string;
    comparePassword(candidatePassword: string, cb: (arg: any, isMatch: boolean) => void): void;
}