import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import { TextField, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const EducationForm: React.FC<{ control: any, errors: any }> = ({ control, errors }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education'
    });

    return (
        <div>
            {fields.map((item, index) => (
                <div key={item.id}>
                    <Controller
                        name={`education[${index}].institution`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Institución"
                                error={!!errors.education?.[index]?.institution}
                                helperText={errors.education?.[index]?.institution?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`education[${index}].degree`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Grado"
                                error={!!errors.education?.[index]?.degree}
                                helperText={errors.education?.[index]?.degree?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`education[${index}].startDate`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fecha de Inicio"
                                error={!!errors.education?.[index]?.startDate}
                                helperText={errors.education?.[index]?.startDate?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`education[${index}].endDate`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fecha de Fin"
                                error={!!errors.education?.[index]?.endDate}
                                helperText={errors.education?.[index]?.endDate?.message}
                            />
                        )}
                    />
                    <IconButton onClick={() => remove(index)}>
                        <Remove />
                    </IconButton>
                </div>
            ))}
            <Button onClick={() => append({ institution: '', degree: '', startDate: '', endDate: '' })}>
                <Add /> Añadir Educación
            </Button>
        </div>
    );
};

export default EducationForm;