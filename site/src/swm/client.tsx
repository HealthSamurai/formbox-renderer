import { createRoot } from "react-dom/client";

import SwmPage from "./page.tsx";

const rootElement = globalThis.document?.querySelector("#root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<SwmPage />);
