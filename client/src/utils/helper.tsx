export const makeFirstLetterCapital = (input: string | undefined) => {
  return input && input.charAt(0).toUpperCase() + input.slice(1);
};


