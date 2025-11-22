export const indexTemplate = (pascal: string) => {
  return `
export * from "./${pascal}.primitive";
`;
};
