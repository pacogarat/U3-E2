import { useState, useEffect } from "react";

const useCatchGlobalError = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (e) => {
      setError(e);
      return true;
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  return error;
};

export default useCatchGlobalError;
