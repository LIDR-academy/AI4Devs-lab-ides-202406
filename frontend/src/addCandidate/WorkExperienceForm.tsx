import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { TextField, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const WorkExperienceForm: React.FC = () => {
    const { control, register } = useForm();
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
                            <TextField {...field} label="Empresa" />
                        )}
                    />
                    {/* Otros campos de experiencia laboral */}
                    <IconButton onClick={() => remove(index)}>
                        <Remove />
                    </IconButton>
                </div>
            ))}
            <Button onClick={() => append({ company: '' })}>
                <Add /> Añadir Experiencia Laboral
            </Button>
        </div>
    );
};

export default WorkExperienceForm;