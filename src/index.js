import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

const Contador = lazy(() => import("./Contador"));
import { ErrorBoundary } from "./ErrorBoundary";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense fallback={<h1>Cargando</h1>}>
      <ErrorBoundary>
        <Contador />
      </ErrorBoundary>
    </Suspense>
  </StrictMode>
);
