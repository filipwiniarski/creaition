export const emptyArrayOfLength = (length: number): number[] => {
  return new Array(length).fill(undefined).map((_, i) => i);
};
