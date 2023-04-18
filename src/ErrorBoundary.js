import React, { useState } from "react";
import { ErrorComponent } from "./ErrorComponent";

export const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
  };

  if (hasError) {
    // Render error message or1 component
    return <ErrorComponent />;
  }
  return props.children;
};
