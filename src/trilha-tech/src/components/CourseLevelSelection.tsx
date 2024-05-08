import { useParams } from "react-router-dom";
import { CourseInformationCard } from "./CourseInformationCard";
import { coursesDatabase, CourseTyoe, LevelType } from "../data/databse";

export function CourseLevelSelection(){
    const  {course} = useParams<{course: CourseTyoe}>();

    function getContentArray(level: LevelType){
        if(course){
            if(coursesDatabase[course][level]){
                if(Array.isArray(coursesDatabase[course][level])){
                    const contentArray = coursesDatabase[course][level];
                }
            }
        }
    }
    
    return(
        <>
            <section className="flex px-16 w-full h-max-[496px] justify-between">
            <div className="flex flex-col justify-between gap-8 w-[577px] p-2">
            <div className="flex flex-col gap-8">
                {course && (
                    <h1 className="text-4xl text-slate-200 font-semibold">{coursesDatabase[course].name}</h1>
                )}

                {course && (
                    <p className="leading-tight text-base w-96">{coursesDatabase[course].description}</p> 
                )}
            </div>
            <CourseInformationCard
                title="Básico"
                buttonLabel="Começar"
                content={["Algoritmos", "Varáveis", "Condicionais"]}
                buttonTo="/ContentSelection/Basic"
             />
            </div>
            </section>

            <section className="flex flex-col mt-8 px-16 gap-5">
                <h2 className="text-2xl text-slate-200">Mais Níveis</h2>
                <div className="flex gap-7 flex-wrap">
                <CourseInformationCard
                    title="Intermediário"
                    buttonLabel="Começar"
                    content={["Algoritmos", "Varáveis", "Condicionais"]}
                    buttonTo="/ContentSelection/Intermediary"
                />
                <CourseInformationCard
                    title="Avançado"
                    buttonLabel="Começar"
                    content={["HTML", "CSS"]}
                    buttonTo="/ContentSelection/Advanced"
                />
                </div>
            </section>
        </>
    )

}