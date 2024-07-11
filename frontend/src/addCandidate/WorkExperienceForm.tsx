import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import { TextField, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const WorkExperienceForm: React.FC<{ control: any, errors: any }> = ({ control, errors }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'workExperience'
    });

    return (
        <div>
            {fields.map((item, index) => (
                <div key={item.id}>
                    <Controller
                        name={`workExperience[${index}].company`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Empresa"
                                error={!!errors.workExperience?.[index]?.company}
                                helperText={errors.workExperience?.[index]?.company?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`workExperience[${index}].position`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Puesto"
                                error={!!errors.workExperience?.[index]?.position}
                                helperText={errors.workExperience?.[index]?.position?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`workExperience[${index}].startDate`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fecha de Inicio"
                                error={!!errors.workExperience?.[index]?.startDate}
                                helperText={errors.workExperience?.[index]?.startDate?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`workExperience[${index}].endDate`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fecha de Fin"
                                error={!!errors.workExperience?.[index]?.endDate}
                                helperText={errors.workExperience?.[index]?.endDate?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`workExperience[${index}].description`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Descripción"
                                error={!!errors.workExperience?.[index]?.description}
                                helperText={errors.workExperience?.[index]?.description?.message}
                            />
                        )}
                    />
                    <IconButton onClick={() => remove(index)}>
                        <Remove />
                    </IconButton>
                </div>
            ))}
            <Button onClick={() => append({ company: '', position: '', startDate: '', endDate: '', description: '' })}>
                <Add /> Añadir Experiencia Laboral
            </Button>
        </div>
    );
};

export default WorkExperienceForm;