import LoginForm from "components/LoginForm";
// import UserInfo from "components/UserInfo";
// import { useSelector } from "react-redux";

function SignIn() {
  // const isSignIn = useSelector(state => state.storeSign.user.isLoggedIn);

  return (
    <>
      <h2>Sign In</h2>
      <LoginForm />
      {/* {!isSignIn && <LoginForm />} */}
      {/* {isSignIn && <UserInfo />} */}
    </>
  );
}

export default SignIn;
