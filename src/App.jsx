import Layout from "components/Layout";
import Home from "pages/Home";
import MyRouter from "pages/MyRouter";
import NotFoundPage from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="router" element={<MyRouter />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
