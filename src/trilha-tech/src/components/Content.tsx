import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ContentProps, CourseType, LevelType, coursesDatabase } from '../data/database'
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
    
type Content = {
    level: LevelType;
    course: CourseType;
    id: string;
};

export function Content(){

   
   const { id, level, course } = useParams<Content>();
   const [content,setContent] = useState<ContentProps>();
   const [contentId, setContentId] = useState<number>(id ? parseInt(id) : 1);
   
   useEffect(() => {
    if(course && level && id){
        const actualContent = coursesDatabase[course][level].filter((element) => element.id === contentId);
        setContent(actualContent[0]);
    }
   }, [contentId])

   function nextContent(){
        setContentId((prev) => prev + 1);
   }

    return(
        <main className="mx-20 my-6 flex flex-col gap-14">
            <header className="w-full flex justify-center">
                <nav className="w-full flex justify-between items-center">
                    <span  className="bg-lime-800 rounded-full  text-white p-2 border-2 border-lime-400">
                        <ArrowLeft 
                            style={{pointerEvents: (contentId == 1) ? 'none' : 'auto', cursor: (contentId == 1) ? 'not-allowed' : 'pointer'}}
                            onClick={() => setContentId((prev) => prev - 1)}
                         />
                    </span>
                    <span className="font-bold text-xl">{content?.title}</span>
                    <span className="bg-lime-800 rounded-full  text-white p-2 border-2 border-lime-400">
                        <ArrowRight 
                            style={{pointerEvents: (course && level && contentId == coursesDatabase[course][level].length) ? 'none' : 'auto', cursor: (course && level && contentId == coursesDatabase[course][level].length) ? 'not-allowed' : 'pointer'}} 
                            onClick={() => nextContent()}  
                        />
                    </span>
                </nav>
            </header>
            <section className="flex flex-col items-center">
                <div className="flex flex-col gap-6">
                    <ReactPlayer url={content?.videoUrl} width={750} height={400} volume={0.4} controls={true} />
                    <div className="flex justify-between">
                        <button className="px-10 py-3 bg-slate-300 rounded-2xl text-slate-900" >Material</button>
                        <Link
                             className={`px-10 py-3 bg-lime-400 rounded-2xl text-lime-900`}
                             to={`/Quiz/${course}/${level}/${content?.contents}`}
                             style={{pointerEvents: (content?.contents.length) ? "auto" : "none"}}
                             
                        >
                            Desafio
                        </Link>
                    </div>
                </div>
            </section>
            {/* <Link className="bg-lime-400 p-2 border-2 border-lime-400 rounded-md m-3 text-slate-700" to={`/Quiz/${course?.slice(1, course.length)}/${level?.slice(1, level.length)}/introducao`}>Quiz</Link> */}
        </main>
    )
}