import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface GuestSelectorProps {
  value: number;
  max: number;
  onChange: (val: number) => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ value, max, onChange }) => {
  const increment = () => value < max && onChange(value + 1);
  const decrement = () => value > 0 && onChange(value - 1);

  return (
    <Box display="flex" alignItems="center" gap={1} mb={2}>
      <IconButton onClick={decrement}><RemoveIcon /></IconButton>
      <TextField value={value} inputProps={{ readOnly: true }} size="small" />
      <IconButton onClick={increment}><AddIcon /></IconButton>
    </Box>
  );
};

export default GuestSelector;
