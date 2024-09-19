import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <h3>This page not exist</h3>

      <Link to="/">Back to main page</Link>
    </>
  );
}

// export default NotFoundPage;
