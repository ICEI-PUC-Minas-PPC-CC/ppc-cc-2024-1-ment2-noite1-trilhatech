import { Link, useNavigate, Outlet } from "react-router-dom";
import { ArrowBigLeft, ChevronDown, Home } from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex">

      <div className="absolute w-full flex justify-between items-center p-2 z-10 md:hidden">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-re rounded-full flex items-center justify-center " 
        >
          <ArrowBigLeft />
        </button>

        <button 
          onClick={() => navigate('/')} 
          className="bg-red rounded-full flex items-center justify-center p-1" 
        >
          <Home />
        </button>

      </div>

      <nav className="max-w-48 py-8 px-3 h-screen hidden bg-slate-500 shadow-sm md:flex flex-col gap-16 rounded-r-md fixed">
        <div className="size-6 flex items-center justify-center w-full">
          <img src={"/logo_final.svg"} className="mt-10 size-48" alt="" />
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

      <main className="h-screen w-screen overflow-y-scroll py-9 relative md:ml-48">
        <Outlet />
      </main>

    </div>
  );
}
