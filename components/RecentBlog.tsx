"use client";

import { IPost } from "@/types/model";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  className: string;
  posts: IPost[];
}
const recentBlogContent = {
  heading: {
    title: "최근에 올라온 글",
    subTitle: "블로그",
    description: "최근에 업로드한 글 들입니다.",
  },
};

const PostCard = ({ index, post }: { index: number; post: IPost }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className={"bg-white relative overflow-hidden group"}
    >
      <Link
        href={`/blog/${post.id}`}
        className={"relative block overflow-hidden"}
      >
        <div className={"relative w-[100%] aspect-square"}>
          <Image
            src={post.thumbnail ?? "/images/no-image.svg"}
            alt={"kim"}
            fill
          />
        </div>
      </Link>
      <div className={"p-8"}>
        <p
          className={"text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]"}
        >
          {format(parseISO(post.createdAt), "LLL d, yyyy")} &bullet;{" "}
          {post.createdAt}
        </p>
        <h3 className={"mb-4"}>
          <Link href={`/blog/${post.id}`} className={"text-lg leading-none"}>
            {post.title}
          </Link>
        </h3>
        <p>
          <Link
            href={`/blog/${post.id}`}
            className={
              "text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600"
            }
          >
            Read more
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
const RecentBlog = ({ className, posts }: IProps) => {
  return (
    <section className={`${className}`}>
      <div className={"container px-4 mx-auto"}>
        <div className={"lg:flex justify-center mb-24"}>
          <div className={"w-full lg:w-8/12 lg:flex gap-0 items-center"}>
            <div className={"lg:w-7/12"}>
              {recentBlogContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className={
                    "uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  }
                >
                  {recentBlogContent.heading.subTitle}
                </motion.span>
              )}

              {recentBlogContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className={"text-2xl lg:text-4xl mb-4 lg:mb-0"}
                >
                  {recentBlogContent.heading.title}
                </motion.h2>
              )}
            </div>
            <div className={"lg:w-5/12 self-end"}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className={"text-gray-500"}
              >
                {recentBlogContent.heading.description}
              </motion.p>
            </div>
          </div>
        </div>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto"
          }
        >
          {posts.slice(0, 3).map((post, idx) => (
            <PostCard key={idx} index={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
