
  // Application.ts
  class Application {
    id: string;
    candidate: Candidate;
    job: Job;
    status: ApplicationStatus;
    appliedDate: Date;
    notes: string;
  
    constructor(id: string, candidate: Candidate, job: Job) {
      this.id = id;
      this.candidate = candidate;
      this.job = job;
      this.status = ApplicationStatus.Applied;
      this.appliedDate = new Date();
      this.notes = "";
    }
  }
  