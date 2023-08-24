export const generateRandomNumber = (numDigits: number): number => {
    const min = 10 ** (numDigits - 1);
    const max = 10 ** numDigits - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };