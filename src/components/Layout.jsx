import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Suspense } from "react";

function Layout() {
  return (
    <>
      <h2>Layout</h2>
      <AppBar />
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
