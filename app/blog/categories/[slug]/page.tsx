import React from "react";
import { allPosts } from "@/.contentlayer/generated";
import Hero from "@/components/about/Hero";
import Posts from "@/components/blog/Posts";
import Subscribe from "@/components/Subscribe";

const Page = ({ params }) => {
  const newTitle = params?.slug.replace("-", " ");
  let itemsTotal = 0,
    items = null;

  if (params?.slug) {
    items = allPosts.filter((post) =>
      post.categories.some(
        (category) =>
          category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "") === params.slug
      )
    );
    itemsTotal = items.length;
  }
  return (
    <>
      <Hero
        className={"pt-52 pb-24 capitalize"}
        title={`${newTitle} (${itemsTotal})`}
        subTitle={"Cateogry"}
      />
      <Posts
        className={"pt-0 pb-52"}
        archive={true}
        params={params}
        itemsPerPage={6}
      />

      <Subscribe className={"py-16 pt-64 lg:py-32 bg-violet-600"} />
    </>
  );
};

export default Page;
