import { Link, useParams } from "react-router-dom"

export function Content(){
   
   const { id, level, course } = useParams();

    return(
        <>
            {
                "Content: "+id
            }
            {
                "Level"+level
            }
            {
                "Curso: " + course
            }
            <Link className="bg-lime-400 p-2 border-2 border-lime-400 rounded-md m-3 text-slate-700" to={`/Quiz/${course?.slice(1, course.length)}/${level?.slice(1, level.length)}/introducao`}>Quiz</Link>
        </>
    )
}