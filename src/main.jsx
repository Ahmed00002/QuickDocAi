import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AllRoutes from "./routes/Routes.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
// import { HelmetProvider } from "react-helmet-async";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      {/* </HelmetProvider> */}
    </ClerkProvider>
  </StrictMode>
);
