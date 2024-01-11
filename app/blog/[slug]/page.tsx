import React from "react";
import { allPosts } from "@/.contentlayer/generated";
import BlogContent from "./BlogContent";
import { useRouter } from "next/router";

export async function generateStaticParams() {
  const posts = await allPosts;

  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: any) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === "posts/" + params.slug
  );

  return { title: post?.title, excerpt: post?.excerpt };
};

const Page = ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === "blog/" + params.slug
  );
  return (
    <>
      <BlogContent post={post} />
    </>
  );
};

export default Page;
