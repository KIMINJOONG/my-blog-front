"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DropDownMenu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Github from "../assets/images/icons/github.svg";
import Instagram from "../assets/images/icons/instagram.svg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import RecentBlog from "@/components/RecentBlog";

export default function Home() {
  return (
    <>
      {/* <Header />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 ">
        <h1 className="text-3xl sm:text-6xl sm:leading-tight max-w-screen-xl font-normal">
          <b>취미부자 개발자 코후비입니다.</b> 이 블로그는 개인적으로 운영하는
          기술 블로그입니다.
        </h1>
        <h2 className="mb-4 font-medium text-base uppercase tracking-wider mt-20">
          최근 게시물
        </h2>
        <div className="flex flex-wrap xl:flex-nowrap gap-10 ">
          <div className="basis-full xl:basis-[65%] shrink-0">
            <Link className="block" href={`/posts/{id}`}>
              <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 ">
                <Image
                  fill
                  src={
                    "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg"
                  }
                  alt={"image"}
                />
              </div>
            </Link>
            <div className="flex flex-wrap gap-3 items-center mt-8">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={"/"}
                  className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                >
                  카테고리
                </Link>
              </div>
              <div className="text-sm data-color flex items-center ">
                <span className="whitespace-nowrap ">2023.05.05</span>
                <span className="px-2.5">⋅</span>
                <span className="whitespace-nowrap">5분 전</span>
              </div>
            </div>
            <h2 className="font-bold leading-snug mt-4 text-2xl sm:text-4xl">
              제목
            </h2>
            <p className="mt-4 sm:text-lg">내용ㄴㅁㅇㅁㄴ...</p>
          </div>
        </div>
      </div>
      <Footer /> */}
      <Hero className={"pt-32 pb-0 lg:pb-10"} />
      <About className={"py-16 lg:py-32 overflow-hidden"} />
      <HowItWorks className={"py-16 !pt-32 lg:py-32"} />
      <Testimonial className={"py-16 lg:py-32"} />
      <RecentBlog className={"py-14 pb-15 lg:pb-32"} />
    </>
  );
}
