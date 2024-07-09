# Prompts

Primero utilizaré Claude para definir los 3 tickets de trabajo

## Prompt 1

Traduce el texto que adjunto de una historia de usuario a inglés

## Answer

Here's the translation of the user story into English:

Add Candidate to System

As a recruiter, I want to have the ability to add candidates to the ATS system, So that I can efficiently manage their data and selection processes.

Acceptance Criteria:

Function accessibility: There should be a clearly visible button or link to add a new candidate from the recruiter's dashboard main page.
Data entry form: When selecting the option to add a candidate, a form should be presented that includes the necessary fields to capture the candidate's information such as name, surname, email, phone, address, education, and work experience.
Data validation: The form should validate the entered data to ensure it is complete and correct. For example, the email should have a valid format and mandatory fields should not be empty.
Document upload: The recruiter should have the option to upload the candidate's CV in PDF or DOCX format.
Addition confirmation: Once the form is completed and the information is submitted, a confirmation message should appear indicating that the candidate has been successfully added to the system.
Errors and exception handling: In case of an error (for example, failure to connect to the server), the system should display an appropriate message to inform the user of the problem.
Accessibility and compatibility: The functionality should be accessible and compatible with different devices and web browsers.
Notes:

The interface should be intuitive and easy to use to minimize the training time required for new recruiters.
Consider the possibility of integrating autocomplete functionalities for the education and work experience fields, based on pre-existing data in the system.
Technical Tasks:

Implement the user interface for the add candidate form.
Develop the necessary backend to process the information entered in the form.
Ensure the security and privacy of the candidate's data.

## Prompt 2

Given the translated user story attached that is part of an ATS system, define the first technical ticket

## Answer

Certainly. Based on the translated user story for adding a candidate to the ATS system, here's a definition for the first technical ticket:

[add-candidate-ui-ticket](/tickets/add-candidate-ui-ticket.md)

Technical Ticket: Implement Add Candidate UIClick to open document
This ticket focuses on implementing the user interface for adding a candidate, which is a crucial part of the user story. It covers the design and implementation of the form, including all necessary fields, validation, and user feedback mechanisms.
The ticket is detailed enough to guide a developer through the implementation process while leaving room for technical decisions and potential iterations. It also considers important aspects like accessibility and responsiveness, which were mentioned in the user story.
Would you like me to elaborate on any part of this ticket or create additional tickets for other aspects of the user story?

## Prompt 3

ok, now create the other two technical tasks

## Answer

Certainly. I'll create technical tickets for the two remaining tasks mentioned in the user story: developing the backend for processing the form data, and ensuring data security and privacy. Let's start with the backend development ticket.
[process-candidate-data-backend-ticket](/tickets/process-candidate-data-backend-ticket.md)
Now, let's create a ticket for ensuring data security and privacy:
[ensure-candidate-data-security-ticket](/tickets/ensure-candidate-data-security-ticket.md)
These two additional tickets cover the remaining technical tasks mentioned in the user story. The first ticket focuses on developing the backend necessary to process the information entered in the form, while the second ticket addresses the security and privacy concerns for the candidate data.
Together with the UI implementation ticket, these three tickets provide a comprehensive approach to implementing the "Add Candidate" feature in the ATS system, ensuring that all aspects of the user story are addressed.
Would you like me to elaborate on any part of these tickets or provide any additional information?
