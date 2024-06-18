import SearchCourses from "../assets/SearchCourses.svg";
import { CourseInformationCard } from "./CourseInformationCard";

export function DiscoverCourses() {
  return (
    <>
      <section className="flex md:px-16 w-full h-max-[496px] max-h-full justify-between">
        <div className="flex flex-col justify-between gap-8 w-[577px] p-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-slate-200 font-semibold">
              Comece selecionando uma Trilha!
            </h1>
            <p className="leading-tight text-base md:w-96">
              Está em dúvida por onde começar? Tente a nossa trilha para
              iniciantes, ou, se preferir escolha uma de nossas outras trilhas!
            </p>
          </div>
          <CourseInformationCard
            title="Lógica de Programação"
            buttonLabel="Começar"
            content={["Algoritmos", "Variáveis", "Estruturas Condicionais", "Estruturas de Repetição"]}
            buttonTo="/CourseLevel/logicaprogramacao"
            totalTime={2}
          />
        </div>
        <div className="hidden md:flex md:flex-1">
          <img
            className="h-[496px] w-full"
            src={SearchCourses}
            alt="Procure Trilhas"
          />
        </div>
      </section>

      <section className="flex flex-col mt-8 md:px-16 gap-5">
        <h2 className="text-2xl text-slate-200">Trilhas</h2>
        <div className="flex gap-7 flex-wrap">
          <CourseInformationCard
            title="Lógica de Programação"
            buttonLabel="Começar"
            content={["Algoritmos", "Variáveis", "Estruturas Condicionais", "Estruturas de Repetição"]}
            buttonTo="/CourseLevel/logicaprogramacao"
            totalTime={2}
          />
          <CourseInformationCard
            title="Front-end"
            buttonLabel="Começar"
            content={["HTML Básico", "Imagens e Links", "Listas e Tabelas", "Divs, Classes e CSS"]}
            buttonTo="/CourseLevel/frontend"
            totalTime={3}
          />
        </div>
      </section>
    </>
  );
}
