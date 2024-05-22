import { useParams } from 'react-router-dom'
import { QuizDataBase, CourseType, LevelType, QuestionProps } from '../data/database'
import { useEffect, useState, createContext } from "react";
import { NavBar } from "../components/Quiz/NaVBar";
import { Questions } from "../components/Quiz/Questions";
import { QuizFooter } from "../components/Quiz/QuizFooter";

interface QuizControllerProps {
    actualQuestion: number;
    answerSelected: number | null
}

type QuizContextType = {
    quizController: QuizControllerProps,
    setQuizController: ({}:QuizControllerProps) => void 
    questions: QuestionProps[];
};

export const QuizContextProvider = createContext<QuizContextType>(
    {
        questions: [],
        quizController: {answerSelected: null, actualQuestion: 0},
        setQuizController: () => {}
    }
);


export function Quiz(){
    const { Course, Level, Content } = useParams<{Course: CourseType, Level: LevelType, Content: NonNullable<string>}>();
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [quizController, setQuizController] = useState<QuizControllerProps>({actualQuestion: 0, answerSelected: null})
    const [questionController, setQuestionController] = useState<number>(0)
    const [answerSelected, setAnswerSelected] = useState<number>(-1)



   useEffect(() => {
        if(Content && Course && Level){
            const filteredQuestions = QuizDataBase[Course][Level].questions.filter((question) => question.includedContents.includes(Content) )
            setQuestions(filteredQuestions)
        }

   }, [])

   function handleSetAnswerSelected(answer: number){
        setQuizController({actualQuestion: quizController.actualQuestion, answerSelected: answer});
   }

   function handleAnswerIsCorrect(answer: number){
        return (questions[quizController.actualQuestion].answers[answer].isCorrect) ? true : false;
   }


    return (
        questions.length > 0 &&
        <main className="w-screen h-screen flex flex-col gap-3">
            <QuizContextProvider.Provider value={{questions, quizController, setQuizController}}>
                <NavBar Course="frontend" />
                <Questions />
                <QuizFooter  handleIsAnswerCorrect={handleAnswerIsCorrect} />
            </QuizContextProvider.Provider>
        </main>
    )
}