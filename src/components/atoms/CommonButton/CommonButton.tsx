// components/atoms/CommonButton/CommonButton.tsx
import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import type { CommonButtonProps } from './CommonButton.types';

const CommonButton: React.FC<CommonButtonProps> = ({
    children,
    loading = false,
    disabled,
    sx,
    startIcon,
    endIcon,
    color = 'primary',
    variant = 'contained',
    ...props
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            disabled={loading || disabled}
            startIcon={!loading && startIcon}
            endIcon={!loading && endIcon}
            sx={{
                height: '56px',
                px: 3,
                borderRadius: 2.5,
                boxShadow: 3,
                textTransform: 'none',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: 6,
                },
                ...sx,
            }}
            {...props}
        >
            {loading ? (
                <CircularProgress size={24} color="inherit" />
            ) : (
                children
            )}
        </Button>
    );
};

export default CommonButton;
