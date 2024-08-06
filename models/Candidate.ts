// Candidate.ts
class Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resume: string; // URL to resume file
    skills: string[];
    experience: number; // in years
    education: Education[];
    applications: Application[];
  
    constructor(id: string, firstName: string, lastName: string, email: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = "";
      this.resume = "";
      this.skills = [];
      this.experience = 0;
      this.education = [];
      this.applications = [];
    }
  }
  