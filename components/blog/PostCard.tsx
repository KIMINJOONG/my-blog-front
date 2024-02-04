"use client";
import { IPost } from "@/types/model";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  post: IPost;
  index: number;
}
const PostCard = ({ post, index }: IProps) => {
  index *= 0.5;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className={"bg-white relative overflow-hidden"}
    >
      <Link
        href={`/blog/${post.id}`}
        className={"relative block overflow-hidden group"}
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
          {format(parseISO(post.createdAt), "LLL d, yyyy")}
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

export default PostCard;
