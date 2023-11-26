import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento Web",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass/>,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Educação",
    info: [
      {
        title: "RocketSeat - Ignite (JavaScript - TypeScript - React - NextJs)",
        stage: "10/2023",
      },
      {
        title: "Matheus Battisti - React (API Rest)",
        stage: "08/2023",
      },
      {
        title: "Origamid - React Completo",
        stage: "06/2023",
      },
      {
        title: "DevSuperior - JavaScript",
        stage: "04/2023",
      },
      {
        title: "Origamid - JavaScript Completo",
        stage: "03/2023",
      },
      {
        title: "B7WEB - HTML5 e CSS3",
        stage: "01/2023",
      },
      {
        title: "Origamid - HTML5 e CSS3",
        stage: "12/2022",
      },
      {
        title: "Origamid - Ui Design",
        stage: "12/2022",
      },
      {
        title: "Udemy - JAVA Programação Orientada a Objetos",
        stage: "05/2022",
      },
      
    ],
  },
  {
    title: "Experiência",
    info: [
      {
        title: "Rede D'OR São Luiz | Auxiliar de Suprimentos",
        stage: "11/2022 - 02/2023",
      },
      {
        title: "Kwai - Editor",
        stage: "03/2022 - 10/2022",
      },
      {
        title: "Editor VFX - Freelancer",
        stage: "2020 - 2022",
      },
      {
        title: "Criador de Conteúdo",
        stage: "2020 - 2022",
      },
    ],
  },
  {
    title: "Formação",
    info: [
      {
        title: "Cursando Análise e Desenvolvimento de Sistemas - UNICID",
        stage: "01/2023 - 12/2024",
      },
      {
        title: "Senac São Miguel Paulista | WINDOWS E OFFICE 2016",
        stage: "06/2019 - 12/2019",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 ">
            10 years ago, I began freelancing as a developer. Since then I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                  
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
