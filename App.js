import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import Restro from "./src/Components/Restro";
import Business from "./src/Components/Business";
import Everyone from "./src//Components/Everyone";
import RestroPage from "./src/Components/RestroPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css"; // Correct relative path

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <Restro /> },
        { path: "idea", element: <Business /> },
        { path: "home", element: <Restro /> },
        { path: "delivery", element: <Everyone /> },
        { path: "restaurant/:restroId", element: <RestroPage /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
