import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, About, Contact, Error, RestaurantMenu } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// lazy load Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Suspense Loading Screen</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />, root);
