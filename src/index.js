import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Contador from "./Contador";
import { ErrorBoundary } from "./ErrorBoundary.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Contador />
    </ErrorBoundary>
  </StrictMode>
);
