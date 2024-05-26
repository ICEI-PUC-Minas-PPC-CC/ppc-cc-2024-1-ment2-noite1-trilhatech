import { useParams, useNavigate } from 'react-router-dom'
import { QuizDataBase, CourseType, LevelType, QuestionProps } from '../data/database'
import { useEffect, useState, createContext } from "react";
import { NavBar } from "../components/Quiz/NaVBar";
import { Questions } from "../components/Quiz/Questions";
import { QuizFooter } from "../components/Quiz/QuizFooter";

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
            setQuestions(filteredQuestions.slice(0, filteredQuestions.length - 1))
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

    return (
        questions.length > 0 &&
        <main className="w-screen h-screen flex flex-col gap-3">
            {
                !quizFinished ? 
                    <QuizContextProvider.Provider value={{questions, quizController, setQuizController, setQuizResults, quizResults, setQuizFinished: handleSetQuizFinished}}>
                        <NavBar Course="frontend" />
                        <Questions />
                        <QuizFooter  handleIsAnswerCorrect={handleAnswerIsCorrect} />
                    </QuizContextProvider.Provider>
                    :
                    <div className='w-full h-full flex items-center justify-center gap-6 flex-col'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl font-semibold' >Quiz finalizado!</h1>
                            <p className='text-lg'>
                                Você acertou {quizResults.correctAnswers} de {quizResults.totalQuestions}
                            </p>
                        </div>
                        <div className='flex justify-between gap-12'>
                            <button className='border-2 border-lime-400 p-2 rounded-md bg-lime-400 text-slate-600 font-bold' onClick={handleResetQuiz} >Reiniciar</button>
                            <button className='border-2 border-lime-400 p-2 rounded-md bg-lime-400 text-slate-600 font-bold' onClick={handleCloseQuiz} >Continuar</button>
                        </div>
                    </div>
            }
        </main>
    )
}