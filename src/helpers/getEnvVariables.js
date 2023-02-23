export const getEnvVariables = () => {
  // import.meta.env;

  return {
    //& ...import.meta.env -> Esto da error en vite
    //Importar manualmente
    VITE_API_URL: import.meta.env.VITE_API_URL,
  };
};
