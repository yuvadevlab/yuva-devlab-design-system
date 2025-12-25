export const styledIndexTemplate = (kebab: string): string => {
  return `
export * from "./${kebab}";
export * from "./${kebab}.types";
`;
};

export const primitiveIndexTemplate = (kebab: string): string => {
  return `
export * from "./${kebab}.primitive";
export * from "./${kebab}.primitive.types";
`;
};

// Deprecated: Use styledIndexTemplate or primitiveIndexTemplate instead
export const indexTemplate = (pascal: string, kebab: string): string => {
  return primitiveIndexTemplate(kebab);
};
