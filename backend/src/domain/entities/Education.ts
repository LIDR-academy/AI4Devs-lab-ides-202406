export class Education {
    constructor(
        public institution: string,
        public degree: string,
        public startDate: string,
        public endDate?: string
    ) {}
}