const makeRandomKey = (length: number): string => {
  let randomKey = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOP';
  for (let i = 0; i < length; i++) {
    randomKey += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomKey;
};

export default makeRandomKey;
