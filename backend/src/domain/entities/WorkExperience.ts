export class WorkExperience {
    constructor(
        public company: string,
        public position: string,
        public startDate: string,
        public endDate?: string,
        public description?: string
    ) {}
}