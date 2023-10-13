import React from "react";
import Samagan from "../pages/samagan/Samagan";
import { Route, Routes } from "react-router-dom";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductPage from "../pages/ProductPage";
import PayPage from "../pages/PayPage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <Samagan />,
    },
    {
      id: 2,
      path: "/products",
      element: <ProductPage />,
    },
    {
      id: 3,
      path: "/product-create",
      element: <ProductCreatePage />,
    },
    {
      id: 4,
      path: "/paypage",
      element: <PayPage/>
    },
  ];

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
