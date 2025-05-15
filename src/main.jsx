import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import { pdfjs } from "react-pdf";
import { Bounce, ToastContainer } from "react-toastify";
import AllRoutes from "./routes/routes";

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
      domain={"https://quickdocai.vercel.app"}
      signUpForceRedirectUrl="/auth/register"
    >
      {/* vercel analytics */}
      <Analytics />
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <AllRoutes />
      </BrowserRouter>
      {/* </HelmetProvider> */}
    </ClerkProvider>
  </StrictMode>
);
