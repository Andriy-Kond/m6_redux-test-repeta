import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

function AppBar() {
  const isSignIn = useSelector(state => state.storeSign.user.isLoggedIn);

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="signin">Sign In</Link>
        </nav>
        {isSignIn && <UserInfo />}
      </header>
    </>
  );
}

export default AppBar;
