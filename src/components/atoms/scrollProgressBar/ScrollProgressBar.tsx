import React, { useEffect, useState } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

const sectionLabels = [
  { label: 'Home', percent: 0 },
  { label: 'Quick Booking', percent: 33.3 },
  { label: 'Dashboard', percent: 66.6 },
];

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((scrolled / maxHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (percent: number) => {
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (percent / 100) * maxHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 9,
        top: 70,
        height: '88vh',
        width: '12px',
        backgroundColor: '#e0e0e0',
        borderRadius: '6px',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        zIndex: 9999,
      }}
    >
      {/* Scroll bar fill */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${scroll}%`,
          backgroundImage: 'linear-gradient(to bottom, #1976d2, #42a5f5)',
          borderRadius: '6px',
          transition: 'height 0.2s ease-out',
        }}
      />

      {/* Checkpoint dots */}
      {sectionLabels.slice(1).map(({ label, percent }) => (
        <Tooltip key={label} title={label} placement="left">
          <Box
            onClick={() => scrollToSection(percent)}
            sx={{
              position: 'absolute',
              top: `${percent}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#fff',
              border: '2px solid #1976d2',
              cursor: 'pointer',
              zIndex: 10000,
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
};

export default ScrollProgressBar;
