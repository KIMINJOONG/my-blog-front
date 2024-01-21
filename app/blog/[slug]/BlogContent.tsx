"use client";
import { allPosts } from "@/.contentlayer/generated";
import QuillNoSSRWrapper from "@/components/QuillNoSSRWrapper";
import PostCard from "@/components/blog/PostCard";
import { IPost } from "@/types/model";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ReactQuill from "react-quill";

interface IProps {
  post: IPost;
}
const BlogContent = ({ post }: IProps) => {
  const quillInstance = useRef<ReactQuill>(null);
  const posts = allPosts.sort();
  let MDXContnet;

  if (!posts) return null;

  if (!post) {
    console.log("Post not found");
  } else {
    // MDXContnet = getMDXComponent(post.body.code);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className={"pt-44 pb-20 lg:py-44 container px-4 mx-auto"}
    >
      <div className={"mx-auto max-w-4xl"}>
        <div className={"text-center mb-16 max-w-4xl mx-auto"}>
          <h1
            className={
              "text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium"
            }
          >
            {post.title}
          </h1>
          <p className={"text-slate-500 mt-10"}>
            <span className={"inline-flex space-x-3"}>
              <span>{format(parseISO(post.createdAt), "LLL d, yyyy")}</span>
              <span>.</span>
              <span>kohubi</span>
            </span>
            <span className="mx-3">.</span>
            <Link
              href={`/blog/categories/${post.category.id}`}
              key={post.category.id}
              className={"font-medium"}
            >
              {post.category.name}
            </Link>
          </p>
        </div>
        <div className={"mb-16"}>
          {/* <Image
            src={post?.image ?? ""}
            width={1065}
            height={644}
            alt={post.title}
            className={"object-cover object-top"}
          /> */}
        </div>

        <article className={"prose mx-auto max-w-2xl"}>
          <QuillNoSSRWrapper
            forwardedRef={quillInstance}
            value={post.content}
            theme={"bubble"}
            readOnly={true}
            placeholder="내용을 입력해주세요."
          />
          {/* <MDXContnet /> */}
        </article>

        <div className={"max-w-4xl mx-auto mt-20 lg:mt-32"}>
          <h2 className={"text-2xl text-gray-700 mb-10"}>More Blog Posts</h2>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}
          >
            {posts
              .filter((a) => post.title !== a.title)
              .map((item, index) => {
                if (index > 2) return null;
                return <PostCard key={index} index={index} post={item} />;
              })}
          </div>
          <div className={"flex justify-center mt-10"}>
            <Link
              href={"/blog"}
              className={
                "transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white hover:bg-white hover:text-violet-600 hover:shadow-2xl"
              }
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogContent;
