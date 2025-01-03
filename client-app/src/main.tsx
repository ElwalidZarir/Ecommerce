import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "@routes/AppRoutes";
import "@styles/global.css";
import { store } from "@store/index";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store} >
    <AppRoutes />
  </Provider>
);
