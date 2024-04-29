import { Link, Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <Link to={'/'} className="font-bold">TrilhaTech</Link>
      <Outlet />
    </div>
  );
}
