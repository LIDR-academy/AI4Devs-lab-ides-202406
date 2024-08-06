
  // Job.ts
  class Job {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    salary: number;
    location: string;
    department: string;
    isOpen: boolean;
    applications: Application[];
  
    constructor(id: string, title: string, description: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.requirements = [];
      this.salary = 0;
      this.location = "";
      this.department = "";
      this.isOpen = true;
      this.applications = [];
    }
  }
  