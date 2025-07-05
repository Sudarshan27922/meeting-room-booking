import { TextField, MenuItem } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

type CommonSelectProps = Omit<TextFieldProps, 'select' | 'children'> & {
  options: string[];
};

const CommonSelect: React.FC<CommonSelectProps> = ({ options, ...props }) => (
  <TextField
    select
    fullWidth
    variant="outlined"
    size="small"
    sx={{ borderRadius: 2, mb: 2 }}
    {...props}
  >
    {options.map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </TextField>
);

export default CommonSelect;
