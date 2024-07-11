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
            degree: Yup.string().required('El grado es obligatorio'),
            startDate: Yup.string().required('La fecha de inicio es obligatoria'),
            endDate: Yup.string(),
        })
    ),
    workExperience: Yup.array().of(
        Yup.object().shape({
            company: Yup.string().required('La empresa es obligatoria'),
            position: Yup.string().required('El puesto es obligatorio'),
            startDate: Yup.string().required('La fecha de inicio es obligatoria'),
            endDate: Yup.string(),
            description: Yup.string(),
        })
    ),
    documents: Yup.array().of(
        Yup.object().shape({
            fileName: Yup.string().required('El nombre del archivo es obligatorio'),
            type: Yup.string().required('El tipo de archivo es obligatorio'),
            content: Yup.string().required('El contenido del archivo es obligatorio'),
        })
    )
});

const AddCandidateForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        const payload = {
            candidate: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
            },
            education: data.education,
            workExperience: data.workExperience,
            documents: data.documents
        };

        try {
            const response = await fetch('http://localhost:3010/api/candidates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error('Error al añadir el candidato: ' + result.message);
            }

            alert(result.message);
            // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito
        } catch (error: any) {
            console.error('Error:', error);
            alert(error.message);
            // Aquí puedes manejar el error, como mostrar un mensaje de error
        }
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
            <EducationForm control={control} errors={errors} />
            <WorkExperienceForm control={control} errors={errors} />
            <FileUpload control={control} errors={errors} />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress size={24} /> : 'Añadir Candidato'}
            </Button>
        </form>
    );
};

export default AddCandidateForm;