"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Project from "@/components/Project";
import Social from "@/components/Social";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 min-h-screen bg-black p-4 overflow-hidden">
      <div
        className={`flex flex-row flex-wrap items-center justify-center gap-6 lg:gap-8 text-center text-white p-4 lg:p-6 transform transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Project
          imagemSrc="/guru-portfolio/imgs/aapfolou.png"
          title="AAP Folou"
          descricao="Um sistema web e mobile é voltado para o publico de donos de pet e donos de petshops.
          O sistema facilita a comunicação entre o dono do pet para a contratação de um serviço ou compra de um produto oferecido pelo petshop"
          githubLink="https://github.com/gurufiredark/aap-folou"
        />
        <Project
          imagemSrc="/guru-portfolio/imgs/Feathers.png"
          title="Projeto Feathers"
          descricao="Projeto utilizando Feathers , TypeScript e React. 
          Consiste em um registro de alunos e livros com a possibilidade de realizar empréstimos"
          githubLink="https://github.com/gurufiredark/ProjetoFeathers"
        />
        <Project
          imagemSrc="/guru-portfolio/imgs/logoc.svg"
          title="Compilador em C adaptado"
          descricao="Um mini compilador em C adaptado para uma linguagem criada por mim "
          githubLink="https://github.com/gurufiredark/compiler_in_C"
        />
        <Project
          imagemSrc="/guru-portfolio/imgs/CEP.png"
          title="Consulta CEP"
          descricao="Um sistema web que consulta o CEP e retorna o endereço através de uma API"
          githubLink="https://github.com/gurufiredark/ProjetoConsultaCep/tree/master"
        />
        <Project
          imagemSrc="/guru-portfolio/imgs/weather.png"
          title="WeatherApp"
          descricao="WeatherApp é uma aplicação web que utiliza a API do OpenWeatherMap para exibir previsões meteorológicas em tempo real e previsões futuras de forma organizada e intuitiva."
          githubLink="https://github.com/gurufiredark/weather-app"
          deployLink="https://gurufiredark.github.io/weather-app/"
        />
        <Project
          imagemSrc="/guru-portfolio/imgs/Go.png"
          title="REST API GO"
          descricao="Uma REST API em Go usando o framework Gin, estruturada em camadas (repository, usecase, controller) para gerenciar produtos em um banco de dados."
          githubLink="https://github.com/gurufiredark/REST-API-Go"
        />
      </div>

      <div
        className={`flex flex-col transform items-center justify-center gap-4 transition-all duration-1000 p-4 lg:p-6 overflow-hidden ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
  
        <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
          <Image
            src="/guru-portfolio/imgs/zoro.png"
            alt="Zoro"
            width={600}
            height={600}
            objectFit="contain"
            className="transition-all duration-500"
          />
        </div>

      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 mt-8">
          <Social />  
      </div>
    </div>
  );
};

export default Projects;
