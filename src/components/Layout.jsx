import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h2>Layout</h2>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="signin">Sign In</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
