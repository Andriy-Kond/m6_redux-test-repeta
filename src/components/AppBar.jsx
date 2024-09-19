import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

function AppBar() {
  const isLoggedIn = useSelector(state => state.storeSign.user.isLoggedIn);

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          {!isLoggedIn && <Link to="signin">Sign In</Link>}
          {isLoggedIn && <Link to="dashboard">Dashboard</Link>}
        </nav>
        {isLoggedIn && <UserInfo />}
      </header>
    </>
  );
}

export default AppBar;
