import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";

// Components
import NotFound from "../pages/NotFound";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route element={route.component} path={route.path} key={route.path} />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route element={route.component} path={route.path} key={route.path} />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
