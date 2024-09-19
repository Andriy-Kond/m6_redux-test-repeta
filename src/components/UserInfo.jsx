import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "reduxTools/slices";

function UserInfo() {
  const userName = useSelector(state => state.storeSign.user.userName);
  const loginDate = useSelector(state => state.storeSign.user.loginDate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());

    navigate("/signin", { replace: true });
  };

  return (
    <div>
      <h3>{userName}</h3>
      <span>Logged in: {loginDate}</span>
      <br />
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default UserInfo;
