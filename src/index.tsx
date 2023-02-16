import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./i18n";
import { RoomProvider } from "./context/RoomContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <RoomProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </RoomProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
