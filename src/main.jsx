import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Provider/Authprovider.jsx";
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>

<QueryClientProvider client={queryClient}>
  
    <HelmetProvider>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </HelmetProvider>
    </QueryClientProvider>
   
  </StrictMode>
);
