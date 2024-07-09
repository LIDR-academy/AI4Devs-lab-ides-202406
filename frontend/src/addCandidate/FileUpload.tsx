import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@mui/material';

const FileUpload: React.FC = () => {
    const { control } = useForm();

    return (
        <Controller
            name="file"
            control={control}
            render={({ field }) => (
                <div>
                    <Input
                        {...field}
                        type="file"
                        inputProps={{ accept: '.pdf,.docx' }}
                    />
                    <Button variant="contained" component="span">
                        Subir Archivo
                    </Button>
                </div>
            )}
        />
    );
};

export default FileUpload;