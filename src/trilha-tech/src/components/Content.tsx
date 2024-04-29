import { useParams } from "react-router-dom"

export function Content(){

    const { id } = useParams();

    return(
        <>
            {
                "Content: "+id
            }
        </>
    )
}