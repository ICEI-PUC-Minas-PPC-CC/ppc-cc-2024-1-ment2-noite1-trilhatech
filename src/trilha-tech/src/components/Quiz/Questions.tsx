import { useContext} from 'react';
import { QuizContextProvider } from '../../pages/Quiz';


export function Questions() {

  const { questions, quizController, setQuizController } = useContext(QuizContextProvider)

  return (
    <div className="w-full flex flex-col items-center gap-9 flex-1">
      <h1 className="font-bold text-4xl">
        {questions[quizController.actualQuestion].question}
      </h1>
      <div className="flex flex-col gap-4">
        {questions[quizController.actualQuestion].answers.map((answer, i) => {
          return (
            <div
              className="min-w-60 h-20 border border-transparent bg-slate-700 flex gap-6 px-6 py-4 items-center rounded-2xl hover:border hover:border-lime-400 transition-all delay-100"
              key={i}
              onClick={() =>
                quizController.answerSelected === i
                  ? setQuizController({actualQuestion: quizController.actualQuestion, answerSelected: null})
                  : setQuizController({actualQuestion: quizController.actualQuestion, answerSelected: i})
              }
            >
              <span
                className={`size-10 border border-transparent bg-${
                  quizController.answerSelected === i ? "lime-400" : "slate-300"
                } rounded-full flex items-center justify-center text-slate-700 font-semibold`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span>{answer.answerTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}