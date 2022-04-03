import React from "react";
import ReactDOM from "react-dom";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import "./index.css";
import Chuck from "./pages/Chuck";
import Switcher from "./switcher";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err: unknown) => console.error(`${err}`),
  }),
  mutationCache: new MutationCache({
    onError: (err: unknown) => console.error(`${err}`),
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Switcher />
      <Chuck />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
