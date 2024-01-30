"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IProps {
  className: string;
}

const testimonialContent = {
  heading: {
    title: "총 경력",
    subTitle: "회사별 근무 경력",
  },
  testimonials: [
    {
      img: "/images/person-1-min.jpg",
      name: "Finders",
      titleRole: "CTO",
      quote: `보인다 앱 프론트 백엔드 개발\n보인다 앱 어드민 웹페이지 총괄\n보인다앱에서 사용되는 채팅서버 개발\nB2B용 챗봇 웹 개발`,
    },
    {
      img: "/images/person-2-min.jpg",
      name: "문코퍼레이션(이니스 컴퍼니)",
      titleRole: "개발팀원",
      quote: "쇼핑몰 통합 관리 어드민 개발",
    },
    {
      img: "/images/person-3-min.jpg",
      name: "Lee",
      titleRole: "homeowner",
      quote: "Working with acraft was a dream",
    },
  ],
};

const Testimonial = ({ className }: IProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setIsEnd(sliderRef?.current?.swiper.isEnd);
    setIsBeginning(sliderRef?.current?.swiper.isBeginning);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper!.slidePrev();
  }, []);

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper!.slideNext();
  }, []);

  return (
    <section className={`${className} overflow-hidden`}>
      <div className={"container px-4 mx-auto"}>
        <div className={"flex justify-center"}>
          <div className={"w-full md:w-8/12 flex gap-0 items-center"}>
            <div
              className={
                "text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16"
              }
            >
              {testimonialContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className={
                    "uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
                  }
                >
                  {testimonialContent.heading.subTitle}
                </motion.span>
              )}

              {testimonialContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className={"text-2xl lg:text-4xl"}
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className={"lg:flex justify-start lg:justify-center"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className={"w-full lg:w-10/12 lg:flex gap-0 items-center"}
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
              className={"z-50 py-32 mb-7 relative flex items-center"}
            >
              {testimonialContent.testimonials.map((testimonial, index) => (
                <SwiperSlide className={"w-full"} key={testimonial.name}>
                  <div
                    className={
                      "block md:flex overflow-y-visible mt-10 items-stretch bg-white"
                    }
                  >
                    <div className={"md:w-4/12"}>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={379}
                        height={320}
                        className={"object-cover object-center !h-full !w-full"}
                      />
                    </div>
                    <div className={"md:w-8/12 p-7 md:p-16 flex items-center"}>
                      <div>
                        <blockquote className={"text-lg mb-7"}>
                          <span
                            className={
                              "text-[200px] leading-[0] relative text-violet-600 block"
                            }
                          >
                            &ldquo;
                          </span>
                          {testimonial.quote.split("\n").map((text, index) => (
                            <p key={index}>{text}</p>
                          ))}
                        </blockquote>
                        <div className={"flex space-x-3 text-sm"}>
                          <strong>{testimonial.name}</strong>
                          <span>&mdash;</span>
                          <span>{testimonial.titleRole}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={"flex justify-center"}
        >
          <div className={"flex space-x-3"}>
            <div
              onClick={prevHandler}
              className={`${
                isBeginning === true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-violet-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                  isBeginning === true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
            <div
              onClick={nextHandler}
              className={`${
                isEnd === true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-violet-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                  isEnd === true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
