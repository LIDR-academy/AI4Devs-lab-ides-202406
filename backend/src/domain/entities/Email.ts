import { ValidationError } from "./ValidationError";

export class Email {
    constructor(private value: string) {
        if (!this.isValidEmail(value)) {
            throw new ValidationError('Invalid email address: ' + value);
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    public getValue(): string {
        return this.value;
    }
}