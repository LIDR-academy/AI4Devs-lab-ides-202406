import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { TextField, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const EducationForm: React.FC = () => {
    const { control, register } = useForm();
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
                            <TextField {...field} label="Institución" />
                        )}
                    />
                    {/* Otros campos de educación */}
                    <IconButton onClick={() => remove(index)}>
                        <Remove />
                    </IconButton>
                </div>
            ))}
            <Button onClick={() => append({ institution: '' })}>
                <Add /> Añadir Educación
            </Button>
        </div>
    );
};

export default EducationForm;