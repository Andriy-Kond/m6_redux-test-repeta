import { useLogoutRedirect } from "hooks/useLogoutRedirect";

function DashboardPage() {
  useLogoutRedirect();

  return (
    <>
      <h2>Dashboard Page</h2>
    </>
  );
}

export default DashboardPage;
