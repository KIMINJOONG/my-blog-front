import React from "react";
import { allPosts } from "@/.contentlayer/generated";
import BlogContent from "./BlogContent";
import { useRouter } from "next/router";
import { IPost } from "@/types/model";
import { ICommonFetchResponse, IGetPostResponse } from "@/types/response";

async function fetchData(slug: string) {
  const res = await fetch(`http://localhost:4000/posts/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  console.log(" params : ", params);
  const { post }: { post: IPost } = await fetchData(params.slug);

  return { title: post?.title, description: post?.content };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: IPost = await fetchData(params.slug);
  return (
    <>
      <BlogContent post={data} />
    </>
  );
};

export default Page;
