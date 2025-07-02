import React, { useState, useRef } from 'react';
import { Avatar, IconButton } from '@mui/material';
import UserMenuPopup from './UserMenuPopup';

const ProfileAvatarWithMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const avatarRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton onClick={handleToggle} ref={avatarRef}>
                <Avatar />
            </IconButton>
            <UserMenuPopup anchorEl={avatarRef.current} open={open} onClose={handleClose} />
        </>
    );
};

export default ProfileAvatarWithMenu;
