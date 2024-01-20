import Subscribe from "@/components/Subscribe";
import Hero from "@/components/about/Hero";
import Posts from "@/components/blog/Posts";
import { ILoadPostsResponse } from "@/types/response";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kohubi's Blogs",
  description: "개발자 코후비의 블로그",
};

async function fetchData() {
  const res: Response = await fetch(
    `http://localhost:4000/posts?limit=6&page=0`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

const Page = async () => {
  const data: ILoadPostsResponse = await fetchData();
  return (
    <>
      <Hero
        className={"pt-52 pb-24"}
        title="Recent Updates"
        subTitle="Our Blog"
      />
      <Posts
        className={"pt-0 pb-52"}
        itemsPerPage={6}
        posts={data.posts}
        totalCount={data.totalCount}
      />
      <Subscribe className={"py-16 pt-64 lg:py-32 bg-violet-600"} />
    </>
  );
};

export default Page;
