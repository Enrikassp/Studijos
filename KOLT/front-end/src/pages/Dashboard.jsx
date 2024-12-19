export default function Dashboard() {
  async function logout() {
    const promise = await fetch("/server/api/auth/logout");

    if (promise.ok) {
      window.location.href = "/login";
    } else {
      const response = await promise.json();
      alert(response.message);
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
