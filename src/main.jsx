import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AllRoutes from "./routes/Routes.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { HelmetProvider } from "react-helmet-async";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      domain={"http://localhost:5173/"}
      signUpForceRedirectUrl="/auth/register"
    >
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      {/* </HelmetProvider> */}
    </ClerkProvider>
  </StrictMode>
);
