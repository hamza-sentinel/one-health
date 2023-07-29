import Link from "next/link";

function Admin() {
  return (
    <div>
      <Link href="/api/auth/signout">Sign out</Link>
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;
