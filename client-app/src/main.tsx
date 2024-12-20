import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "@routes/AppRoutes";

createRoot(document.getElementById("root")!).render(<AppRoutes />);
