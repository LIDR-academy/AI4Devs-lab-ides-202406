import { ValidationError } from "./ValidationError";

export class PhoneNumber {
    constructor(private value: string) {
        if (!this.isValidPhoneNumber(value)) {
            throw new ValidationError('Invalid phone number');
        }
    }

    private isValidPhoneNumber(phone: string): boolean {
        const phoneRegex = /^\d{9}$/;
        return phoneRegex.test(phone);
    }

    public getValue(): string {
        return this.value;
    }
}