import { Link } from "react-router-dom"

export function CourseLevelSelection(){

    return(
        <>
            <Link className="font-bold" to={"/ContentSelection/low"}>Básico</Link>
            <Link className="font-bold" to={"/ContentSelection/intermediate"}>Intermediário</Link>
            <Link className="font-bold" to={"/ContentSelection/high"}>Avançado </Link>
        </>
    )

}