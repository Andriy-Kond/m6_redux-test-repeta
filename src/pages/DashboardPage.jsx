import { useLogoutRedirect } from "hooks/useLogoutRedirect";

export function DashboardPage() {
  useLogoutRedirect();

  return (
    <>
      <h2>Dashboard Page</h2>
    </>
  );
}
