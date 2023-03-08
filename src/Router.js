import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Main } from './Main';
import AllAvatars from "./components/allAvatars";
function Router() {

  return (
    <div className="body container">
      <BrowserRouter >
        {/* Suspense under BrowserRouter catches generateDynamicRoutes() lazy loading */}
        <Suspense>
          <Routes>
            <Route
              exact
              path="/"
              key="beta"
              element={
                <Suspense key="/*">
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path="/my-profile"
              key="beta"
              element={
                <Suspense key="/*">
                  <Main />
                </Suspense>
              }
            />
            <Route
              exact
              path="/all-avatars"
              key="beta"
              element={
                <Suspense key="/*">
                  <AllAvatars />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default Router;
