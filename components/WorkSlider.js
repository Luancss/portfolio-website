// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/paineldash.jpg",
          href: "https://react-admin-dashboard-mu-teal.vercel.app/",
        },
        {
          title: "title",
          path: "/dogs2.JPG",
          href: "https://dogs-origamid.vercel.app/"
        },
        {
          title: "title",
          path: "/BIK12.JPG",
          href: "https://luancss.github.io/bikcraft/"
        },
        {
          title: "title",
          path: "/mneyyy.JPG",
          href: "https://dtmoney-02.vercel.app/"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/desktop.png",
          href: "https://luancss.github.io/GymWebsite/"
        },
       
        {
          title: "title",
          path: "/timerrr.JPG",
          href: "https://ignite-timer-luancss.vercel.app/"
        },
        {
          title: "title",
          path: "/news222.JPG",
          href: "https://github.com/Luancss/Ignews"
        },
        {
          title: "title",
          path: "/animais.png",
          href: "https://luancss.github.io/Animais-Fantasticos/"
        },
      ],
    },
  ],
};

import Link from "next/link";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// icon
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <Link href={image.href || "#"} target="_blank" passHref>

                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image href={image.href} src={image.path} width={500} height={300} alt="" />
                      {/* overflow gradient*/}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div  className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">VER</div>
                          {/* title part 2*/}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJETO
                          </div>
                          {/*icon*/}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
