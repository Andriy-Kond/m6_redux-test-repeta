import { useDispatch, useSelector } from "react-redux";
import { logOut } from "reduxTools/slices";

function UserInfo() {
  const userName = useSelector(state => state.storeSign.user.userName);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>{userName}</p>

      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
}

export default UserInfo;
