# GitHub Copilot Prompts Iniciales

## Database

```
@workspace create a database schema for PostgreSQL using Prisma ORM. There will be two tables
  - Applicant
  - ApplicantFiles

The Applicant table will have following fields:
  - id PK BigSerial
  - firstName varchar(120) encrypted
  - lastName varchar(120) encrypted
  - socialSecurityNumber varchar(20) encrypted
  - dateOfBirth date encrypted
  - email varchar(50) encrypted
  - phoneCode varchar(3)
  - phone varchar(10) encrypted
  - street (nullable) varchar(80) encrypted
  - exteriorNumber (nullable) varchar(10) encrypted
  - interiorNumber (nullable) varchar(10) encrypted
  - city varchar(120)
  - country varchar(3)
  - education text encrypted
  - professionalExperience text encrypted

All the PII data must be encrypted.

The ApplicantFiles table will have following fields:
  - id PK BigSerial
  - applicantId FK BigSerial => Applicant.id
  - type enum(resume, certification, other)
  - name varchar(100)
  - extension enum(doc, docx, pdf)
  - mimetype varchar(50)
  - path varchar(150)
  - hash text

Create the required migration files to have this structure available in the LTIdb
```

```
Add three new fields to the Applicant and ApplicantFiles tables:
  - createdAt datetime not null default now
  - updatedAt datetime nullable
  - deletedAt datetime nullable
  - createdBy FK BigSerial => User.id

Add a new field to the Applicant table:
  - status enum(new, open, review, interview, screening, negotiation, hired, rejected, declined)
```

```
What should be the type of an encrypted field in Prisma for PostgreSQL?
```

## API

```
In the backend/src folder, create the proper structure to follow a DDD design pattern, then update the README documentation with explanation of the purpose of each new folder in backend/src.
```

```
Following DDD design pattern, create the files and the code for an API endpoint `POST /applicant` that will be used to create a new Applicant and store it in the `Applicant` table.

The endpoint must support the following fields as part of the payload and use the Zod library to validate each field:
  - firstName: required, string, not empty, min 2, max 120
  - lastName: required, string, not empty, min 2, max 120
  - socialSecurityNumber: optional, string, min 0, max 20
  - dateOfBirth: optional, date string, min 0, max 20
  - email: required, email string
  - phoneCode: required, ITU-T string, min 2, max 3
  - phone: required, string, max 10
  - street: optional, string, max 80
  - exteriorNumber: optional, string, max 10  
  - interiorNumber: optional, string, max 10
  - city: required, string, max 120
  - country: required, ISO-3166-1 alpha-3 string, max 3
  - education: required, text, not empty
  - professionalExperience: required, text, not empty

The PII fields must be stored encrypted.

The endpoint must returns the following statuses
  - 201 Created in case the Applicant creation was success
  - 400 Bad Request in case the payload contains errors
  - 500 Internal Server Error in case of an unexpected error
```

```
@workspace How can I encrypt and decrypt PII data in my application when using Prisma ORM with PostgreSQL?
```

## UI

```
In the /frontend application, we need to update the default React app with:
- Create a home page for a Recruiter dashboard.
  - The dashboard must have a left side nav bar with an option for "Applicants" that must be visible through the entire application flow so the user will be able to quickly jump between different pages

When the "Applicants" option is selected:
  - It must display a button "Add Applicant" on the top left of the Applicant panel

When the user clicks the "Add Applicant" button:
  - The Applicant Panel must display the Applicant Form to add a new Applicant

The Applicant Form must display the following fields:
  - firstName: required, string, not empty, min 2, max 120
  - lastName: required, string, not empty, min 2, max 120
  - socialSecurityNumber: optional, string, min 0, max 20
  - dateOfBirth: optional, date, min 0, max 20
  - email: required, email string
  - phoneCode: required, dropdown with international phone codes (ITU-T)
  - phone: required, string, max 10
  - street: optional, string, max 80
  - exteriorNumber: optional, string, max 10
  - interiorNumber: optional, string, max 10
  - city: required, string, max 120
  - country: required, dropdown with countries displaying flag and name, the value must have a value following the ISO-3166-1 alpha-3
  - education: required, text, not empty
  - professionalExperience: required, text, not empty

The entire application must use Material UI.
```