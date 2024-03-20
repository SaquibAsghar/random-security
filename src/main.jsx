// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { CurrentUserProvider } from "./app/context/currentUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </Provider>
  // </React.StrictMode>
);
