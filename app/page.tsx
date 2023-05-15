import DropDownMenu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Github from "../assets/images/icons/github.svg";
import Instagram from "../assets/images/icons/instagram.svg";

export default function Home() {
  return (
    <>
      <header className="py-5 px-5 sm:px-8 flex items-center  mb-20">
        <div className="flex flex-1">
          <span>KOHUBI</span>
        </div>
        <div className="flex flex-row">
          <button
            className="p-1.5 cursor-pointer "
            aria-label="Toggle light/dark themes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>

          <button className="p-1.5 cursor-pointer" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <nav className="lg:hidden relative">
            <DropDownMenu />
          </nav>
        </div>
      </header>
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
      <footer className="max-w-[1480px] mx-auto px-5 sm:px-8 mt-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 pt-10 border-t border-gray-100 dark:border-gray-900">
          <h3 className="uppercase text-sm tracking-wider mb-6">Follow Me</h3>
          <div className="flex gap-5 text-xl heading-color ">
            <Link href={"https://instagram.com"}>
              <Instagram width={30} height={30} />
            </Link>
            <Link href={"https://github.com"}>
              <Github width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className="py-6 text-sm text-center uppercase tracking-wide">
          © 2023 코후비 블로그
        </div>
      </footer>
    </>
  );
}
