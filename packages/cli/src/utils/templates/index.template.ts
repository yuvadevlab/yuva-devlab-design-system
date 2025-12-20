export const indexTemplate = (pascal: string): string => {
  return `
export * from "./${pascal}.primitive";
`;
};
