// manipulating dom , changing something , inserting and romoveing form dom is costly so react help to minimize this cost;
// whatever you wnat to do , should manipulate dom by js or react, not html direct
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/Components/Header";
import Restro from "./src/Components/Restro";
import Search from "./src/Components/Search";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Business from "./src/Components/Business";

import "/App.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Restro />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // inside this we have arry of paths, and we definde the path
  { path: "/", element: <AppLayout /> },
  { path: "/idea", element: <Business /> },
]);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
