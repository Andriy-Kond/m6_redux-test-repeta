import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "reduxTools/slices";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date().toLocaleString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const form = e.currentTarget;
    dispatch(logIn(form.elements.userName.value, date));

    form.reset();
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;
