import { getCourseName } from "../utils/getCourseContentTitle";
import { useParams, Link } from 'react-router-dom'
import { QuizDataBase, CourseTyoe, LevelType, QuestionProps } from '../data/database'
import { X } from 'lucide-react'
import { ButtonHTMLAttributes, useEffect, useState } from "react";


export function Quiz(){
    const { Course, Level, Content } = useParams<{Course: CourseTyoe, Level: LevelType, Content: NonNullable<string>}>();
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [questionController, setQuestionController] = useState<number>(0)
    const [answerSelected, setAnswerSelected] = useState<number>(-1)

    console.log(questions)
    console.log(questionController)

   useEffect(() => {
        if(Content && Course && Level){
            const filteredQuestions = QuizDataBase[Course][Level].questions.filter((question) => question.includedContents.includes(Content) )
            setQuestions(filteredQuestions)
        }
   }, [])


    return (
        questions.length > 0 &&
        <main className="w-screen h-screen flex flex-col gap-3">
            <nav className="w-full px-36 py-6 flex justify-between items-center">
                <span className="font-bold text-2xl">Logo</span>
                <span className="font-bold text-2xl">{Course && getCourseName(Course)}</span>
                <Link to={'/'} className="bg-slate-600 rounded-full size-10 flex items-center justify-center"><X className="text-bg-slate-400"/></Link>
            </nav>
            <div className="w-full flex flex-col items-center gap-9 flex-1">
                <h1 className="font-bold text-4xl">{questions[questionController].question}</h1>
                <div className="flex flex-col gap-4">
                    {
                        questions[questionController].answers.map((answer, i) => {
                            return (
                                <div 
                                    className="min-w-60 h-20 border border-transparent bg-slate-700 flex gap-6 px-6 py-4 items-center rounded-2xl hover:border hover:border-lime-400 transition-all delay-100" 
                                    key={i}
                                    onClick={() => answerSelected === i ? setAnswerSelected(-1) : setAnswerSelected(i)}
                                >
                                    <span className={`size-10 border border-transparent bg-${answerSelected === i ? 'lime-400' : 'slate-300'} rounded-full flex items-center justify-center text-slate-700 font-semibold`}>
                                        {
                                            String.fromCharCode(65+i)
                                        }
                                    </span>
                                    <span>{answer.answerTitle}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <footer className="flex w-full justify-between px-36 p-3 bg-slate-700 rounded-t-2xl items-center">
                <div className="flex justify-between gap-3 items-center">
                    <span className="block w-[200px] h-4 bg-slate-300 rounded-full">
                        <span className={`block h-4 w-[25%] rounded-full bg-lime-500`}>
                        </span>
                    </span>
                    <span>1/5</span>
                </div>
                <button className="px-10 py-3 bg-lime-400 rounded-2xl text-lime-900">Continuar</button>

            </footer>
        </main>
    )
}