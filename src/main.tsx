import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={null}>
        <ReactQueryDevtoolsProduction />
      </React.Suspense>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
