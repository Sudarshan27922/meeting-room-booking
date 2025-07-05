import React from 'react';
import Box from '../../atoms/box';
import Typography from '../../atoms/typography';
import Button from '../../atoms/button';
import type { SxProps, Theme } from '@mui/material';

interface HomeSectionProps {
  background: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  overlayColor?: string;
  clipPath?: string;
  children?: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  textPosition?: { top?: string; left?: string; right?: string; bottom?: string };
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4';
  subtitleVariant?: 'h5' | 'h6' | 'body1' | 'body2';
  textBoxStyle?: SxProps<Theme>;
  sideImage?: string;
  sideImagePosition?: 'left' | 'right' | 'top' | 'bottom'; // extended
  titleTextAlign?: 'left' | 'center' | 'right'; // added
  subTitleTextAlign?: 'left' | 'center' | 'right'; // added
  btnColor?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning'; // updated to match MUI Button color prop
  textAlignItems?: 'flex-start' | 'flex-end'
}

const HomeSection: React.FC<HomeSectionProps> = ({
  background,
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  overlayColor = 'rgba(255, 87, 34, 0.8)',
  clipPath,
  children,
  titleColor = '#fff',
  subtitleColor = '#fff',
  textAlign = 'left',
  textPosition,
  titleVariant = 'h2',
  subtitleVariant = 'h6',
  textBoxStyle = {},
  sideImage,
  sideImagePosition = 'left',
  titleTextAlign,
  subTitleTextAlign,
  btnColor = 'primary',
  textAlignItems,
}) => (
  <Box
    sx={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {clipPath && (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: overlayColor,
          clipPath,
          zIndex: 1,
        }}
      />
    )}

    {/* Outer content box */}
    <Box
      sx={{
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: sideImage && (sideImagePosition === 'right') ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...textPosition,
        ...textBoxStyle,
      }}
    >
      {/* Image box (conditionally rendered) */}
      {sideImage && (
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            ...(sideImagePosition === 'right' ? { marginLeft: 32 } : { marginRight: 32 }),
          }}
        >
          <img
            src={sideImage}
            alt="Section Visual"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </Box>
      )}
      {/* Text box */}
      <Box
        sx={{
          flex: 2,
          color: titleColor,
          textAlign,
          display: 'flex',
          flexDirection: 'column',
          alignItems: textAlignItems ?? ((sideImage && sideImagePosition === 'right') || !sideImage ? 'flex-start' : 'flex-end'),
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant={titleVariant}
          fontWeight="bold"
          color={titleColor}
          textAlign={titleTextAlign}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant={subtitleVariant}
            mt={2}
            color={subtitleColor}
            textAlign={subTitleTextAlign}
          >
            {subtitle}
          </Typography>
        )}
        {buttonLabel && onButtonClick && (
          <Button variant="contained" color={btnColor} onClick={onButtonClick} sx={{ mt: 3 }}>
            {buttonLabel}
          </Button>
        )}
        {children}
      </Box>
    </Box>
  </Box>
);

export default HomeSection;
