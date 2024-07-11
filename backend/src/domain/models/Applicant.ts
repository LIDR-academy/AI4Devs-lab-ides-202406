export interface Applicant {
  firstName: string;
  lastName: string;
  socialSecurityNumber?: string;
  dateOfBirth?: string;
  email: string;
  phoneCode: string;
  phone: string;
  street?: string;
  exteriorNumber?: string;
  interiorNumber?: string;
  city: string;
  country: string;
  education: string;
  professionalExperience: string;
}
