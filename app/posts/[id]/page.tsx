"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuillNoSSRWrapper from "@/components/QuillNoSSRWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ReactQuill from "react-quill";

const PostDetail = () => {
  const quillInstance = useRef<ReactQuill>(null);
  return (
    <>
      <Header />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 ">
        <div className="max-w-screen-md mx-auto ">
          <div className="flex flex-wrap gap-3 items-center text-[15px]">
            <div className="flex flex-wrap gap-3">
              <Link
                href={"/"}
                className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
              >
                카테고리
              </Link>
            </div>
            <div className="text-sm data-color flex items-center">
              <span className="whitespace-nowrap ">2023.05.05</span>
              <span className="px-2.5">⋅</span>
              <span className="whitespace-nowrap">5분 전</span>
            </div>
          </div>
          <h2 className="font-bold leading-snug text-3xl sm:text-[2.5rem] mt-6">
            제목!!
          </h2>
          <div className="flex gap-2 items-center mt-4">
            <div className="flex">
              <Link
                href={"/"}
                className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 "
              >
                <div className="rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 inline-block leading-[0] !border-2">
                  <div className="pt-[100%] relative">
                    <Image
                      fill
                      src={
                        "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg"
                      }
                      alt={"인물"}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={"/"} className="text-sm font-medium heading-color">
                김인중
              </Link>
            </div>
          </div>
          <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16">
            <QuillNoSSRWrapper
              forwardedRef={quillInstance}
              value={`<p><img src="https://kohubi-new-blog.s3.ap-northeast-2.amazonaws.com/1705463694936.png" width="186" style="">안녕</p><h1>ㅁㅇㄴㄹㅁㄴㅇㄹㅁㄴ</h1><p><code>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ</code></p><p><br></p><blockquote><code>ㄴㅇㄹㅁㄴㅇㄹㅁ</code></blockquote><blockquote><br></blockquote><blockquote><code>ㅁ</code></blockquote><p><span style="background-color: rgb(0, 0, 0);">ㄹㅇㅁㄴㄹㄴㅁㄹㄴㅁㅇㄹ</span></p><p><br></p><p>dsfasasdf</p><p><br></p><p><a href="https://naver.com" rel="noopener noreferrer" target="_blank">https://naver.com</a></p>`}
              theme={"bubble"}
              readOnly={true}
              placeholder="내용을 입력해주세요."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PostDetail;
