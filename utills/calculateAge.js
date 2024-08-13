import { ToastAndroid } from 'react-native';

export const calculateAge = dob => {
  if (!dob) {
    return null;
  }

  const now = new Date();
  const birthDate = new Date(dob);

  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDifference = now.getMonth() - birthDate.getMonth();

  // If the birth month hasn't come yet in the current year, or if it's the birth month but the birth date hasn't come yet, subtract one year from the age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && now.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
