import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm';
import FileUpload from './FileUpload';

const schema = Yup.object().shape({
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
    phone: Yup.string().required('El teléfono es obligatorio'),
    address: Yup.string().required('La dirección es obligatoria'),
    education: Yup.array().of(
        Yup.object().shape({
            institution: Yup.string().required('La institución es obligatoria'),
            // ... otros campos de educación
        })
    ),
    workExperience: Yup.array().of(
        Yup.object().shape({
            company: Yup.string().required('La empresa es obligatoria'),
            // ... otros campos de experiencia laboral
        })
    ),
    documents: Yup.array().of(
        Yup.mixed().required('El documento es obligatorio')
    )
});

const AddCandidateForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        // Lógica para enviar los datos al backend
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nombre"
                        error={!!errors.firstName}
                        helperText={errors.firstName ? errors.firstName.message : ''}
                    />
                )}
            />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Apellido"
                        error={!!errors.lastName}
                        helperText={errors.lastName ? errors.lastName.message : ''}
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                )}
            />
            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Teléfono"
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ''}
                    />
                )}
            />
            <Controller
                name="address"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Dirección"
                        error={!!errors.address}
                        helperText={errors.address ? errors.address.message : ''}
                    />
                )}
            />
            <EducationForm />
            <WorkExperienceForm />
            <FileUpload />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress size={24} /> : 'Añadir Candidato'}
            </Button>
        </form>
    );
};

export default AddCandidateForm;