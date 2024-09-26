import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "components/Layout";

// Якщо не потрібно використовувати lazy:
// import { DashboardPage, Home, NotFoundPage, SignIn } from "pages";

import Home from "pages/Home";
// import SignIn from "pages/SignIn";
// import DashboardPage from "pages/DashboardPage";
// import NotFoundPage from "pages/NotFoundPage";

// Якщо іменований експорт:
// const SignIn = lazy(async () =>
//   import("pages/SignIn").then(module => ({
//     ...module,
//     default: module.SignIn,
//   })),
// );

// const DashboardPage = lazy(() =>
//   import("pages/DashboardPage").then(module => {
//     return {
//       ...module,
//       default: module.DashboardPage,
//     };
//   }),
// );

// // Якщо default export:
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
// const SignIn = lazy(() => import("pages/SignIn"));
// const DashboardPage = lazy(() => import("pages/DashboardPage"));

// оптимізація іменованих імпортів
const lazyImport = componentName => {
  return lazy(() =>
    import("pages").then(module => ({
      ...module,
      default: module[componentName],
    })),
  );
};

const SignIn = lazyImport("SignIn");
const DashboardPage = lazyImport("DashboardPage");
const NotFoundPage = lazyImport("NotFoundPage");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
