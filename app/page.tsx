"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentBlog from "@/components/RecentBlog";
import Testimonial from "@/components/Testimonial";
import { ILoadPostsResponse } from "@/types/response";

const limit = 3;

async function fetchData() {
  const res: Response = await fetch(
    `http://localhost:4000/posts?limit=${limit}&page=0`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data: ILoadPostsResponse = await fetchData();
  return (
    <>
      <Hero className={"pt-32 pb-0 lg:pb-10"} />
      {/* <About className={"py-16 lg:py-32 overflow-hidden"} /> */}
      {/* <HowItWorks className={"py-16 !pt-32 lg:py-32"} /> */}
      <Testimonial className={"py-16 lg:py-32"} />
      <RecentBlog className={"py-14 pb-15 lg:pb-32"} posts={data.posts} />
      {/* <Subscribe className={"py-16 pt-64 -mt-48 lg:py-32 bg-violet-600"} /> */}
      <Footer className={"bg-white"} />
      {/* py-16 md:py-24 */}
    </>
  );
}
