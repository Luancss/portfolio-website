// testimonial data
const testimonialSlider = [
  {
    image: "/t-avt-1.png",
    name: "Anne",
    position: "Full Stack Developer",
    message:
      "Destaco a capacidade excepcional do Luan em resolver problemas complexos de forma rápida e eficaz. Sua abordagem proativa e pensamento analítico fazem dele um recurso valioso em qualquer equipe de desenvolvimento.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane",
    position: "Desenvolvedora Frontend",
    message:
      "Recomendo fortemente os serviços do Luan. Seu profissionalismo, criatividade e atenção aos detalhes transformaram nossa visão em uma realidade visualmente impressionante.",
      
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon",
    position: "Software Enginier",
    message:
      "Trabalhar com o Luan foi uma experiência onde sua destreza em resolver problemas se destacou. Sempre encontrando soluções inteligentes.",
  },
];

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

// icon
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={{ Navigation, Pagination }}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* posotion */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
