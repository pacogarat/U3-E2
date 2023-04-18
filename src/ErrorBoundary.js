import useCatchGlobalError from "./useCatchGlobalError.js";

export const ErrorBoundary = (props) => {
  const error = useCatchGlobalError();

  if (error) return <h1>Ha habido un error que se ha capturado</h1>;
  return <h1>{props.children}</h1>;
};
