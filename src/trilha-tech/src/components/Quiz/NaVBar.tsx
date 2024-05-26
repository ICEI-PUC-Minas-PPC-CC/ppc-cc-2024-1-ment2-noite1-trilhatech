import { Link, useNavigate } from "react-router-dom";
import { getCourseName } from "../../utils/getCourseContentTitle";
import { CourseType } from "../../data/database";
import { X } from "lucide-react";

export function NavBar({Course}: {
    Course: CourseType
}) {

  const navigate = useNavigate();

  return (
    <nav className="w-full px-36 py-6 flex justify-between items-center">
      <span className="font-bold text-2xl">Logo</span>
      <span className="font-bold text-2xl">
        {Course && getCourseName(Course)}
      </span>
      <Link
        to={"/"}
        className="bg-slate-600 rounded-full size-10 flex items-center justify-center"
      >
        <X className="text-bg-slate-400" onClick={() => navigate(-1)} />
      </Link>
    </nav>
  );
}
