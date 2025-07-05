import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import type { AuthUser } from '../../../context/AuthContext';

interface UserInfoCardProps {
  user: AuthUser;
}

const DetailRow: React.FC<{ icon: React.ReactNode; label: string; value: string | undefined }> = ({ icon, label, value }) => (
  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', mb: 0.8 }}>
    {icon}
    <Typography variant="body1" component="span">
      <strong>{label}:</strong> {value}
    </Typography>
  </Stack>
);

const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => (
  <Paper
    elevation={8}
    sx={{
      p: 4,
      borderRadius: 4,
      width: '100%',
      mx: 'auto',
      bgcolor: 'background.paper',
      textAlign: 'center',
    }}
  >
    <Avatar
      sx={{
        width: 150,
        height: 150,
        bgcolor: 'primary.main',
        fontSize: 56,
        mx: 'auto',
        mb: 3,
        boxShadow: 3,
      }}
      aria-label="user-avatar"
    >
      {user.name.charAt(0)}
    </Avatar>

    <Typography variant="h4" fontWeight={700} gutterBottom>
      {user.name}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" mb={3}>
      {user.position}
    </Typography>

    <Box textAlign="left" maxWidth={320} mx="auto">
      <DetailRow icon={<PersonIcon fontSize="small" />} label="Role" value={user.role} />
      <DetailRow icon={<EmailIcon fontSize="small" />} label="Email" value={user.email} />
      <DetailRow icon={<BadgeIcon fontSize="small" />} label="Username" value={user.userName} />
    </Box>
  </Paper>
);

export default UserInfoCard;
