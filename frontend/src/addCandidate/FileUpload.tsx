import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import { TextField, Button, IconButton, Input } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const FileUpload: React.FC<{ control: any, errors: any }> = ({ control, errors }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'documents'
    });

    return (
        <div>
            {fields.map((item, index) => (
                <div key={item.id}>
                    <Controller
                        name={`documents[${index}].fileName`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Nombre del Archivo"
                                error={!!errors.documents?.[index]?.fileName}
                                helperText={errors.documents?.[index]?.fileName?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`documents[${index}].type`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Tipo de Archivo"
                                error={!!errors.documents?.[index]?.type}
                                helperText={errors.documents?.[index]?.type?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`documents[${index}].content`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="file"
                                inputProps={{ accept: '.pdf,.docx' }}
                                error={!!errors.documents?.[index]?.content}
                                helperText={errors.documents?.[index]?.content?.message}
                            />
                        )}
                    />
                    <IconButton onClick={() => remove(index)}>
                        <Remove />
                    </IconButton>
                </div>
            ))}
            <Button onClick={() => append({ fileName: '', type: '', content: '' })}>
                <Add /> Añadir Documento
            </Button>
        </div>
    );
};

export default FileUpload;