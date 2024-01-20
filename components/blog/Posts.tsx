"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, allPosts } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import { IPost } from "@/types/model";

interface IPros {
  className: string;
  itemsPerPage: number;
  archive?: boolean;
  params?: any;
  posts: IPost[];
  totalCount: number;
}
const Items = ({
  currentItems,
  posts,
}: {
  currentItems: Post[] | null;
  posts: IPost[];
}) => {
  return (
    <>
      {posts &&
        posts.map((post, index) => {
          index *= 0.05;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index, duration: 0.3 },
              }}
              viewport={{ once: true }}
              key={post.title}
              className={"bg-white relative overflow-hidden group"}
            >
              <Link
                href={`/blog/${post.id}`}
                className={"relative block overflow-hidden"}
              >
                <Image
                  src={post.image ?? ""}
                  alt={"kim"}
                  width={1064}
                  height={644}
                  className={
                    "object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                  }
                />
              </Link>
              <div className={"p-8"}>
                <p
                  className={
                    "text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]"
                  }
                >
                  {format(parseISO(post.createdAt), "LLL d, yyyy")}
                </p>
                <h3 className={"mb-4"}>
                  <Link
                    href={`/blog/${post.id}`}
                    className={"text-lg leading-none"}
                  >
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
        })}
    </>
  );
};

const Posts = ({
  className,
  itemsPerPage,
  archive = false,
  params,
  posts,
  totalCount,
}: IPros) => {
  const [currentItems, setCurrentItems] = useState<Post[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  let items: Post[] | null = null;
  if (archive === false) {
    items = allPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "")
              .replace(/^-+|-+$/g, "") === params.slug
        )
      );
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (items) {
      setCurrentItems(items!.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));

      if (clickPaginate === true) {
        setTimeout(function () {
          ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 300);
        setClickPaginate(false);
      }
    }
  }, [setCurrentItems, setPageCount, setClickPaginate]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) & items!.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;
  return (
    <section className={`${className}`} ref={ref}>
      <div className={"container px-4 mx-auto"}>
        <div
          className={
            "lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          }
        >
          <Items currentItems={currentItems} posts={posts} />
        </div>

        <div className={"lg:w-10/12 mx-auto flex flex-wrap"}>
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="pageitem"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;
