import { Link, useParams } from "react-router-dom"

export function ContentSelection(){
    const { level } = useParams();

    return(
        <div className="flex flex-col gap-6">
            {
                "Level: " + level
            }
            <Link to={"Content/:12234235"}>Tags</Link>
            <Link to={"Content/:92348759"}>HTML semântico</Link>
        </div>
    )

}