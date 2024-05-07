import { useParams } from "react-router-dom"

export function Content(){
   
   const { id, level } = useParams();

    return(
        <>
            {
                "Content: "+id
            }
            {
                "Level"+level
            }
        </>
    )
}