import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

function Layout() {
  return (
    <>
      <h2>Layout</h2>
      <AppBar />
      <hr />
      <Outlet />
    </>
  );
}

export default Layout;
