import { Education } from './Education';
import { WorkExperience } from './WorkExperience';
import { Document } from './Document';
import { Email } from './Email';
import { PhoneNumber } from './PhoneNumber';
import { ValidationError } from './ValidationError';

export class Candidate {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: Email,
        public phone: PhoneNumber,
        public address: string,
        public education: Education[],
        public workExperience: WorkExperience[],
        public documents: Document[]
    ) {
        this.validate();
    }

    private validate(): void {
        if (!this.firstName || typeof this.firstName !== 'string') {
            throw new ValidationError('Invalid first name');
        }
        if (!this.lastName || typeof this.lastName !== 'string') {
            throw new ValidationError('Invalid last name');
        }
        if (!(this.email instanceof Email)) {
            throw new ValidationError('Invalid email');
        }
        if (!(this.phone instanceof PhoneNumber)) {
            throw new ValidationError('Invalid phone number');
        }
    }
}