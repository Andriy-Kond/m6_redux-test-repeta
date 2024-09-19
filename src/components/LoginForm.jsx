import { useDispatch } from "react-redux";
import { logIn } from "reduxTools/slices";

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.userName.value, date.toLocaleString()));

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;
