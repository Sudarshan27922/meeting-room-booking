import type { Shadows } from '@mui/material/styles';

const shadows: Shadows = [
    'none', // shadow[0]
    '0px 2px 4px rgba(0, 0, 0, 0.3)', // shadow[1]
    '0px 4px 8px rgba(0, 0, 0, 0.35)', // shadow[2]
    '0px 6px 12px rgba(0, 0, 0, 0.4)', // shadow[3]
    '0px 8px 16px rgba(0, 0, 0, 0.45)', // shadow[4]
    '0px 10px 20px rgba(0, 0, 0, 0.5)', // shadow[5]
    '0px 12px 24px rgba(0, 0, 0, 0.55)', // shadow[6]
    '0px 14px 28px rgba(0, 0, 0, 0.6)', // shadow[7]
    '0px 16px 32px rgba(0, 0, 0, 0.65)', // shadow[8]
    '0px 18px 36px rgba(0, 0, 0, 0.7)', // shadow[9]
    '0px 20px 40px rgba(0, 0, 0, 0.75)', // shadow[10]
    '0px 22px 44px rgba(0, 0, 0, 0.8)', // shadow[11]
    '0px 24px 48px rgba(0, 0, 0, 0.85)', // shadow[12]
    '0px 26px 52px rgba(0, 0, 0, 0.9)', // shadow[13]
    ...Array(11).fill('0px 10px 20px rgba(0, 0, 0, 0.25)'), // shadow[14] to shadow[24]
]as Shadows;

export default shadows;