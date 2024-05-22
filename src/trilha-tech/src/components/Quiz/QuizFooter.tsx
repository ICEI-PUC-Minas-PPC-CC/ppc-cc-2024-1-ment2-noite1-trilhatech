import { SetStateAction, Dispatch, useContext } from "react";
import { QuizContextProvider } from "../../pages/Quiz";

interface QuizFooterProps {
    handleIsAnswerCorrect: (answer: number) => boolean;
}

export function QuizFooter({ handleIsAnswerCorrect }: QuizFooterProps) {

    const { quizController, setQuizController } = useContext(QuizContextProvider) 

    function nextQuestion (){
        if( quizController.answerSelected && handleIsAnswerCorrect(quizController.answerSelected)){
          setQuizController({actualQuestion: quizController.actualQuestion+1, answerSelected: null})
        }else{
          alert("Incorreto")
        }
    }

  return (
    <footer className="flex w-full justify-between px-36 p-3 bg-slate-700 rounded-t-2xl items-center">
      <div className="flex justify-between gap-3 items-center">
        <span className="block w-[200px] h-4 bg-slate-300 rounded-full">
          <span className={`block h-4 w-[25%] rounded-full bg-lime-500`}></span>
        </span>
        <span className="font-semibold">1/5</span>
      </div>
      <button className="px-10 py-3 bg-lime-400 rounded-2xl text-lime-900" onClick={() => nextQuestion()}>
        Continuar
      </button>
    </footer>
  );
}
