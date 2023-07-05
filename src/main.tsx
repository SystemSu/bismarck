import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { theme } from "./shared/theme/index.tsx";
import {QueryClientProvider} from '@tanstack/react-query'
import { queryClient } from "./config/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      
      </ThemeProvider>
  
  </React.StrictMode>
);
