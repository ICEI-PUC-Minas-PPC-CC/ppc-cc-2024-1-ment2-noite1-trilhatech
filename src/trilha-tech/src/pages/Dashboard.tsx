import { Link, Outlet } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export function Dashboard() {
  return (
    <div className="flex">

      <nav className="max-w-48 py-8 px-3 h-screen bg-slate-500 shadow-sm flex flex-col gap-16 rounded-r-md fixed">
        <div className="size-6 flex items-center justify-center w-full">
          <img
            className="h-[120px] w-full mt-10"
            src= "/logo_final.svg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link to={'/'} className="font-bold antialiased text-sm text-slate-300/80 flex items-center gap-1 cursor-pointer">
            Trilhas <ChevronDown size={14}/>
          </Link>
          <div className="flex flex-col gap-1/2 ml-2">
            <Link className="hover:text-lime-400 text-base text-slate-300 font-medium" to="/CourseLevel/logicaprogramacao">Lógica de programação</Link>
            <Link className="hover:text-lime-400 text-base text-slate-300 font-medium" to="/CourseLevel/frontend">Front-end</Link>
          </div>
        </div>
      </nav>

      <main className="h-screen w-screen py-9 relative ml-48">
        <Outlet />
      </main>

    </div>
  );
}
