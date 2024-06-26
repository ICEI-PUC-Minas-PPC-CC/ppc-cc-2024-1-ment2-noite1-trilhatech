import { useContext } from "react";
import { QuizContextProvider } from "../../pages/Quiz";

interface QuizFooterProps {
    handleIsAnswerCorrect: (answer: number) => boolean;
}

export function QuizFooter({ handleIsAnswerCorrect }: QuizFooterProps) {

    const { quizController, setQuizController, setQuizResults, quizResults, setQuizFinished } = useContext(QuizContextProvider) 

    function finishQuiz(){
      if(quizController.answerSelected && handleIsAnswerCorrect(quizController.answerSelected)){
              const newQuizResults = {
              correctAnswers: quizResults.correctAnswers + 1,
              totalQuestions: quizResults.totalQuestions
            };
            setQuizResults(newQuizResults);
          }

          setQuizFinished(true);
    }

    function nextQuestion (){

        if( quizController.answerSelected !== null && handleIsAnswerCorrect(quizController.answerSelected)){
          setQuizController({actualQuestion: quizController.actualQuestion, answerSelected: quizController.answerSelected, isAnswered: 'correct'})
          setTimeout(() => {
            setQuizController({actualQuestion: quizController.actualQuestion+1, answerSelected: null, isAnswered: 'answering'})
          }, 2000);
          const newQuizResults = {
            correctAnswers: quizResults.correctAnswers + 1,
            totalQuestions: quizResults.totalQuestions
          };
          setQuizResults(newQuizResults);
        }else{
          setQuizController({actualQuestion: quizController.actualQuestion, answerSelected: quizController.answerSelected, isAnswered: 'incorrect'})
           setTimeout(() => {
            setQuizController({actualQuestion: quizController.actualQuestion+1, answerSelected: null, isAnswered: 'answering'})
          }, 2000)
        }
    }

    function handleGetProgress(){
      return `${((quizController.actualQuestion) / 5) * 100}%`;
    }

  return (
    <footer className="flex self-end w-full justify-between md:px-36 p-3 bg-slate-700 rounded-t-2xl items-center">
      <div className="flex justify-between gap-3 items-center">
        <span className={`block w-[200px] h-4 bg-slate-300 rounded-full`}>
          <span style={{width: handleGetProgress()}} className={`block h-4 rounded-full bg-lime-500 transition-all delay-100`}></span>
        </span>
        <span className="hidden md:block font-semibold">{quizController.actualQuestion}/5 Respondidas</span>
      </div>
          <button className="px-10 py-3 bg-lime-400 rounded-2xl text-lime-900" disabled={quizController.answerSelected === null} onClick={() => quizController.actualQuestion === 4 ? finishQuiz() : nextQuestion()}>  
            {
               quizController.actualQuestion === 4 ? "Finalizar" : "Continuar"
            }
          </button>
    </footer>
  );
}
