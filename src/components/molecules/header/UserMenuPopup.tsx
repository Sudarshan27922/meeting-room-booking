import {
  Avatar,
  Button,
  ClickAwayListener,
  Popper,
  Stack,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Box from '../../atoms/box';
import Paper from '../../atoms/paper';
import Typography from '../../atoms/typography';

interface UserMenuPopupProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const UserMenuPopup: React.FC<UserMenuPopupProps> = ({ anchorEl, open, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    onClose();
    navigate('/profile');
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ]}
      disablePortal={false}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          elevation={3}
          sx={{
            width: 240,
            borderRadius: 2,
            p: 2,
            zIndex: 1300,
          }}
        >
          <Box sx={{ alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>

            <Avatar sx={{ width: 64, height: 64 }} />

            <Typography variant="body1" fontWeight="bold">
              Hi, {user?.name}
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleProfileClick}
                sx={{ borderRadius: 2 }}
              >
                Profile
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={logout}
                sx={{ borderRadius: 2 }}
              >
                Logout
              </Button>
            </Stack>
          </Box>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default UserMenuPopup;
