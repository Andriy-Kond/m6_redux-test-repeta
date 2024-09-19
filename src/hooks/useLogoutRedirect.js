import { useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

// Хук може використовуватись на різних сторінках - якщо користувач не залогінений, то перенаправляти його на сторінку логіну.
export const useLogoutRedirect = () => {
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.storeSign.user.isLoggedIn);

  useEffect(() => {
    // Якщо користувач розлогінений, то треба робити перенаправлення на сторінку логіну, бо розлогін може бутине лише по натисканню кнопки logout, але і по завершенню сесії.

    if (!isLoggedIn) {
      // navigate("/signin", { replace: true });
      redirect("/signin");
    }
  }, [isLoggedIn]);
};
