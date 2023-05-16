import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const PostDetail = () => {
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
            <div className="text-sm data-color flex items-center ">
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
          <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 mt-12">
            <Image
              fill
              alt="Post thumbnail"
              src={
                "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155.jpg"
              }
            />
          </div>
          <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16">
            <p>
              Morbi accumsan turpis vitae vulputate rhoncus. Etiam accumsan arcu
              diam, ac lobortis ligula commodo quis. Nulla a ipsum sagittis,
              malesuada leo ac, convallis massa. Sed imperdiet lorem libero, sit
              amet iaculis dolor tempus at. Curabitur et tempor massa.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PostDetail;
