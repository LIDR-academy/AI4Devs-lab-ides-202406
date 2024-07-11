import ky from 'ky';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, FormHelperText, styled, Box } from '@mui/material';
import { useSnackbar } from 'notistack';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required').min(2).max(120),
  lastName: yup.string().required('Last name is required').min(2).max(120),
  // Add other fields validation as per requirements
});

function ApplicantForm() {
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      socialSecurityNumber: '',
      dateOfBirth: '',
      email: '',
      phoneCode: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      street: '',
      exteriorNumber: '',
      interiorNumber: '',
      education: '',
      professionalExperience: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await ky.post('http://localhost:3010/applicant', { json: values });
        if (response.ok) {
          // Display success toast message
          enqueueSnackbar('Applicant created successfully', { variant: 'success' });
        } else {
          // Handle error
          if (response.status === 400) {
            const errorData: Record<string, any> = await response.json();
            alert(errorData.message);
          } else {
            enqueueSnackbar('Applicant created successfully', { variant: 'error' });
          }
        }
      } catch (error) {
        // Handle network error
      }
    },
  });

  return (
    <ApplicantFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id="socialSecurityNumber"
          name="socialSecurityNumber"
          label="Social Security Number"
          value={formik.values.socialSecurityNumber}
          onChange={formik.handleChange}
          error={formik.touched.socialSecurityNumber && Boolean(formik.errors.socialSecurityNumber)}
          helperText={formik.touched.socialSecurityNumber && formik.errors.socialSecurityNumber}
        />
        <TextField
          id="dateOfBirth"
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
          helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <FormControl>
          <InputLabel id="phoneCode-label">Phone Code</InputLabel>
          <Select
            labelId="phoneCode-label"
            id="phoneCode"
            name="phoneCode"
            value={formik.values.phoneCode}
            onChange={formik.handleChange}
            error={formik.touched.phoneCode && Boolean(formik.errors.phoneCode)}
          >
            <MenuItem value={"1"}>+1</MenuItem>
            <MenuItem value={"91"}>+91</MenuItem>
            <MenuItem value={"44"}>+44</MenuItem>
            {/* Add more phone code options as needed */}
          </Select>
          <FormHelperText>{formik.touched.phoneCode && formik.errors.phoneCode}</FormHelperText>
        </FormControl>
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <FormControl>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            {/* Add more country options as needed */}
          </Select>
          <FormHelperText>{formik.touched.country && formik.errors.country}</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
          >
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            {/* Add more state options as needed */}
          </Select>
          <FormHelperText>{formik.touched.state && formik.errors.state}</FormHelperText>
        </FormControl>
        <TextField
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          id="street"
          name="street"
          label="Street"
          value={formik.values.street}
          onChange={formik.handleChange}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
        />
        <TextField
          id="exteriorNumber"
          name="exteriorNumber"
          label="Exterior Number"
          value={formik.values.exteriorNumber}
          onChange={formik.handleChange}
          error={formik.touched.exteriorNumber && Boolean(formik.errors.exteriorNumber)}
          helperText={formik.touched.exteriorNumber && formik.errors.exteriorNumber}
        />
        <TextField
          id="interiorNumber"
          name="interiorNumber"
          label="Interior Number"
          value={formik.values.interiorNumber}
          onChange={formik.handleChange}
          error={formik.touched.interiorNumber && Boolean(formik.errors.interiorNumber)}
          helperText={formik.touched.interiorNumber && formik.errors.interiorNumber}
        />
        <TextField
          id="education"
          name="education"
          label="Education"
          value={formik.values.education}
          onChange={formik.handleChange}
          error={formik.touched.education && Boolean(formik.errors.education)}
          helperText={formik.touched.education && formik.errors.education}
        />
        <TextField
          id="professionalExperience"
          name="professionalExperience"
          label="Professional Experience"
          value={formik.values.professionalExperience}
          onChange={formik.handleChange}
          error={formik.touched.professionalExperience && Boolean(formik.errors.professionalExperience)}
          helperText={formik.touched.professionalExperience && formik.errors.professionalExperience}
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </ApplicantFormContainer>
  );
}

const ApplicantFormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
`;

export default ApplicantForm;
