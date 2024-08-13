import { ToastAndroid } from 'react-native';

export const calculateHeight = height => {
  if (!height) {
    return null;
  }

  const feet = Math.floor(height / 12);
  const inches = height % 12;
  const convertedHeight = `${feet}'${inches}"`;

  return convertedHeight;
};
