// * Якщо не потрібен import lazy можна експортувати все:
// export * from "./Home";
// export * from "./NotFoundPage";
// export * from "./SignIn";
// export * from "./DashboardPage";
// І потім зробити імпорт наступного зразку:
// import { DashboardPage, Home, NotFoundPage, SignIn } from "pages";

// * працює з import lazy лише через default: module[ім'я компоненту]
export { default as Home } from "./Home";
export { default as NotFoundPage } from "./NotFoundPage";
export { default as SignIn } from "./SignIn";
export { default as DashboardPage } from "./DashboardPage";
// Тоді можна робити дефолтні імпорти для lazy:
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
// const SignIn = lazy(() => import("pages/SignIn"));
// const DashboardPage = lazy(() => import("pages/DashboardPage"));

// * Якщо зробити іменовані експорти, то імпорти у lazy доведеться модернізувати:
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
