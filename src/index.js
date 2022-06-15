import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProviders";

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
