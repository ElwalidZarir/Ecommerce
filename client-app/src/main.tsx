import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "@routes/AppRoutes";
import "@styles/global.css";
import { store, persistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);
