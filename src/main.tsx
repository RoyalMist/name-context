import React from "react";
import ReactDOM from "react-dom";
import { NameProvider } from "./contextes/name";
import "./index.css";
import Change from "./pages/Change";
import Display from "./pages/Display";

ReactDOM.render(
  <React.StrictMode>
    <NameProvider>
      <Change />
      <Display />
      <Display />
      <Display />
    </NameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
