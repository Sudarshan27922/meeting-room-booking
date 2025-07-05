import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import type { SearchBarProps } from './SearchBar.types';


const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = 'Search...',
    onClear,
    onSearch,
    autoFocus = false,
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const handleClear = () => {
        onClear?.();
        onChange('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch?.();
        }
    };

    return (
        <div>
            <TextField
                fullWidth
                autoFocus={autoFocus}
                variant="outlined"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                sx={{
                    width: '500px',
                    mx: 'auto',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '30px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: 2,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'secondary.main',
                            borderWidth: 2,
                        },
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: value && (
                        <InputAdornment position="end" >
                            <IconButton onClick={handleClear} size="small" >
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;
