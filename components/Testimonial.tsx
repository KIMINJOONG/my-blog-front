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
      img: "/images/finders_logo.jpg",
      name: "Finders",
      titleRole: "CTO",
      quote: `2021년 11월 - 현재
      
      자사 플랫폼 개발 및 유지보수
      금융SNS인 파인애플 앱 프로젝트의 시작 아키텍쳐 설계부터 백엔드, 프론트엔드 업무 중
      spring boot와 JPA를 사용하여 백엔드 서버를 개발
      프론트는 react-native를 사용
      nodejs express 프레임워크로 개발되어있었던 회사 웹페이지 유지보수 작업
      파인애플에서 보인다로 앱명 변경
      챗GPT와 연동하는 챗봇 서버를 FastAPI와 도커로 개발 및 배포
      NestJS를 사용하여 채팅 서버 개발`,
    },
    {
      img: "/images/no-image.svg",
      name: "문코퍼레이션(이니스 컴퍼니)",
      titleRole: "개발팀원",
      quote: `2020년 2월 - 2021년 11월 | 1년 10개월

      자사 쇼핑몰 관련 솔루션 개발 및 유지보수
      reactjs, react hooks, laravel로 구현
      자사가 가지고있는 쇼핑몰을 상품등록, 주문등의 업무처리를 한 관리자 페이지에서 관리할수있도록 통합 솔루션을 메인으로 맡아 개발함.
      현재는 소셜네트워크 앱을 리액트 네이티브와 라라벨로 앱, 서버 개발 진행중`,
    },
    {
      img: "/images/grafik_logo.jpg",
      name: "그라픽",
      titleRole: "백엔드팀",
      quote: `2019년 5월 - 2020년 2월 | 10개월

      쇼핑몰관련 si, sm업무
      php, node js, vue.js를 사용하여 쇼핑몰 개발
      spring boot를 사용하여 해외에서 가져온 데이터를 각 인터넷 마켓으로 연동시켜주는 중간 플랫폼역할을 하는 웹사이트 유지보수 및 개발업무`,
    },
    {
      img: "/images/no-image.svg",
      name: "사랑모아 금융서비스",
      titleRole: "전산개발팀",
      quote: `2018년 4월 - 2019년 4월 | 1년 1개월

      전산 개발 및 유지보수를 주로 담당하였습니다.
      웹으로 구현된 erp 개발 및 유지보수
      직원전용 쇼핑몰인 '고객몰'을 구현
      사랑모아 어플에서 어플과 erp의 데이터 연동으로 보험금 청구, 보험분석 기능과 사내 보험설계사를 보험상담사로 지정될수있도록 구현`,
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
                    <div className={"md:w-4/12 md:h-4/12 relative"}>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        className={"object-center !h-full !w-full"}
                      />
                    </div>
                    <div className={"md:w-8/12 p-7 md:p-16 flex items-center"}>
                      <div>
                        <blockquote className={"text-lg mb-7"}>
                          {/* <span
                            className={
                              "text-[200px] leading-[0] relative text-violet-600 block"
                            }
                          >
                            &ldquo;
                          </span> */}
                          {testimonial.quote.split("\n").map((text, index) => (
                            <span key={index}>
                              {text}
                              <br />
                            </span>
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
