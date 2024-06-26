import { useParams, useNavigate, Link } from 'react-router-dom'
import { QuizDataBase, CourseType, LevelType, QuestionProps } from '../data/database'
import { useEffect, useState, createContext } from "react";
import { NavBar } from "../components/Quiz/NaVBar";
import { Questions } from "../components/Quiz/Questions";
import { QuizFooter } from "../components/Quiz/QuizFooter";
import { Check } from 'lucide-react';
import { getCourseContentTitle, getCourseName } from '../utils/getCourseContentTitle';

interface QuizControllerProps {
    actualQuestion: number;
    answerSelected: number | null;
    isAnswered: 'correct' | 'incorrect' | 'answering'
}

interface QuizResults {
    totalQuestions: number;
    correctAnswers: number;
}

type QuizContextType = {
    quizController: QuizControllerProps,
    setQuizController: ({}:QuizControllerProps) => void,
    quizResults: QuizResults
    setQuizResults: ({}: QuizResults) => void
    questions: QuestionProps[];
    setQuizFinished: (param: boolean) => void;
};

export const QuizContextProvider = createContext<QuizContextType>(
    {
        questions: [],
        quizController: {answerSelected: null, actualQuestion: 0, isAnswered: 'answering'},
        setQuizController: () => {},
        setQuizResults: () => {},
        quizResults: {
            correctAnswers: 0,
            totalQuestions: 5
        },
        setQuizFinished: () => {}
    }
);



export function Quiz(){
    const { Course, Level, Content } = useParams<{Course: CourseType, Level: LevelType, Content: NonNullable<string>}>();
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [quizController, setQuizController] = useState<QuizControllerProps>({actualQuestion: 0, answerSelected: null, isAnswered: 'answering'})
    const [quizResults, setQuizResults] = useState<QuizResults>({totalQuestions: 5, correctAnswers: 0});
    const [quizFinished, setQuizFinished] = useState<boolean>(false);

    const navigate = useNavigate();


   useEffect(() => {
        if(Content && Course && Level){
            const filteredQuestions = QuizDataBase[Course][Level].questions.filter((question) => question.includedContents.includes(Content) )
            const quizQuestions: QuestionProps[] = [];
            while(quizQuestions.length < 5){
                let randomQuestion = Math.floor(Math.random() * (filteredQuestions.length ));

                if(!quizQuestions.includes(filteredQuestions[randomQuestion])){
                    quizQuestions.push(filteredQuestions[randomQuestion]);
                }
            }

            setQuestions(quizQuestions);
        }
   }, [])

   function handleSetQuizFinished(param: boolean){
        setQuizFinished(param);
   }

   function handleAnswerIsCorrect(answer: number){
        return (questions[quizController.actualQuestion].answers[answer].isCorrect) ? true : false;
   }

   function handleResetQuiz(){
        setQuizController({actualQuestion: 0, answerSelected: null, isAnswered: 'answering'});
        setQuizFinished(false);
        setQuizResults({totalQuestions: 5, correctAnswers: 0});
   }

   function handleCloseQuiz(){
        navigate(-1);
   }

   function getQuizPercentage(){
    return quizResults.correctAnswers / quizResults.totalQuestions * 100
   }

    return (
        questions.length > 0 &&
        <main className="md:w-full h-[100svh] md:h-screen flex flex-col gap-3">
            {
                !quizFinished ? 
                    <QuizContextProvider.Provider value={{questions, quizController, setQuizController, setQuizResults, quizResults, setQuizFinished: handleSetQuizFinished}}>
                        <NavBar Course={Course && Course || "logicaprogramacao"} />
                        <Questions  handleIsAnswerCorrect={handleAnswerIsCorrect} />
                        <QuizFooter  handleIsAnswerCorrect={handleAnswerIsCorrect} />
                    </QuizContextProvider.Provider>
                    :
                    <div className='w-full h-full flex items-center justify-center gap-6 flex-col'>
                        <div className='flex flex-col items-center gap-3'>
                            <h1 className='text-2xl font-bold'>Resultados do Desafio</h1>
                            <Check size={50} className='rounded-full bg-lime-400 text-lime-800 p-2' />
                            <p className='max-w-[50vw] leading-tight tracking-tighter text-center'>
                                {
                                    getQuizPercentage() >= 60 ? "Bom trabalho, você foi fenomenal!" : "Bom trabalho, mas você pode melhorar, tente revisar os conteúdos!"
                                }
                            </p>
                        </div>
                        <div className='bg-slate-600 p-3 rounded-lg flex flex-col items-center gap-2'>
                            <div className='flex flex-col gap-5 items-center'>
                                <h2 className='text-xl font-bold'>
                                    Sua pontuação
                                </h2>
                                <span className='text-4xl font-extrabold text-lime-400'>{getQuizPercentage()}%</span>
                            </div>
                            <span className='h-1 w-full border-t border-slate-300/50'></span>
                            <span className='text-sm'>Você acertou {quizResults.correctAnswers} de {quizResults.totalQuestions} questões</span>
                        </div>
                        <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSfYNOu5cOQVNcX2xknYK2U_OHv4QLaVAoWPDkXqLdWtp9JiuA/viewform'} className='underline text-lime-400 font-semibold'>Avalie o TrilhaTech</Link>
                        <div className='flex justify-evenly w-full md:justify-center md:gap-12'>
                             <button className='border-2 border-lime-400 p-2 rounded-md bg-lime-400 text-slate-600 font-bold' onClick={handleResetQuiz} >Reiniciar</button>
                            <button className='border-2 border-lime-400 p-2 rounded-md bg-lime-400 text-slate-600 font-bold' onClick={handleCloseQuiz} >Continuar</button>
                        </div>
                    </div>
            }
        </main>
    )
}