import { Link } from "react-router-dom";
import SearchCourses from "../assets/SearchCourses.svg";
import { CourseInformationCard } from "./CourseInformationCard";

export function DiscoverCourses() {
  return (
    <>
      <section className="flex px-16 w-full h-max-[496px] justify-between">
        <div className="flex flex-col justify-between gap-8 w-[577px] p-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-slate-200 font-semibold">
              Comece selecionando uma Trilha!
            </h1>
            <p className="leading-tight text-base w-96">
              Está em dúvida por onde começar? Tente a nossa trilha para
              iniciantes, ou, se preferir escolha uma de nossas outras trilhas!
            </p>
          </div>
          <CourseInformationCard
            title="Lógica de programaçao"
            buttonLabel="Começar"
            content={["Algoritmos", "Varáveis", "Estruturas de repetição"]}
            buttonTo="/CourseLevel/logicaprogramacao"
          />
        </div>
        <div className="hidden md:flex flex-1">
          <img
            className="h-[496px] w-full"
            src={SearchCourses}
            alt="Procure Trilhas"
          />
        </div>
      </section>

      <section className="flex flex-col mt-8 px-16 gap-5">
        <h2 className="text-2xl text-slate-200">Trilhas</h2>
        <div className="flex gap-7 flex-wrap">
          <CourseInformationCard
            title="Lógica de programaçao"
            buttonLabel="Começar"
            content={["Algoritmos", "Varáveis", "Estruturas de repetição"]}
            buttonTo="/CourseLevel/logicaprogramacao"
          />
          <CourseInformationCard
            title="Front-end"
            buttonLabel="Começar"
            content={["HTML básico", "Tags semânticas"]}
            buttonTo="/CourseLevel/frontend"
          />
        </div>
      </section>
    </>
  );
}
