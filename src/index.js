import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const Contador = lazy(() => import("./Contador"));
import { ErrorBoundary } from "./ErrorBoundary.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Contador />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
