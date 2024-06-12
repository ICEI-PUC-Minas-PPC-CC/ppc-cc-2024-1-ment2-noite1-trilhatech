import { Link } from "react-router-dom";

interface CourseInformationCardProps{
    title: string;
    content: Array<string>;
    buttonLabel: string;
    buttonTo: string;
    totalTime: number;
}

export function CourseInformationCard({ title, content, buttonLabel, buttonTo, totalTime }: CourseInformationCardProps) {
  return (
    <div className="bg-slate-600 w-96 h-64 rounded-xl  py-4 px-5  flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-slate-200">{title}</h2>
        {totalTime !== 0 && (<span className="text-sm">{totalTime} horas</span>)}
      </div>
      <ul className="list-disc ml-5 flex-1">
        {
            content.map((listElement, index) => {
                return (
                    <li key={index}>{listElement}</li>
                )
            })
        }
      </ul>
      <Link
        to={buttonTo}
        className="bg-lime-400 w-1/3 text-center text-slate-800 rounded-lg py-2 px-1"
      >
        {
            buttonLabel
        }
      </Link>
    </div>
  );
}
