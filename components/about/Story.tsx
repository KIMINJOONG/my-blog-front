"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../public/images/img-square-1-min.jpg";
import img2 from "../../public/images/img-square-2-min.jpg";
import img3 from "../../public/images/img-square-3-min.jpg";
import img4 from "../../public/images/img-square-4-min.jpg";
import img5 from "../../public/images/img-square-5-min.jpg";
import post1 from "../../public/images/post-1-min.jpg";
import post2 from "../../public/images/post-2-min.jpg";

interface IProps {
  className: string;
}
const storyContent = {
  column1: {
    images: [
      {
        img: img5,
        alt: "Team",
        width: 1188,
        height: 1413,
        tailwindCss: "h-56 lg:h-96",
      },
      {
        img: img1,
        alt: "Woman",
        width: 1188,
        height: 1413,
      },
    ],
  },
  column2: {
    images: [
      {
        img: img2,
        alt: "Team meeting",
        width: 1188,
        height: 1413,
        tailwindCss: "h-48 lg:h-64",
      },
      {
        img: post2,
        alt: "White curvy building",
        width: 1188,
        height: 1413,
        tailwindCss: "h-56 lg:h-64",
      },
      {
        img: img4,
        alt: "White curvy building",
        width: 1188,
        height: 1413,
        tailwindCss: "h-56 lg:h-64",
      },
    ],
  },
  column3: {
    images: [
      {
        img: post1,
        alt: "Team meeting",
        width: 1188,
        height: 1413,
        tailwindCss: "h-56 lg:h-64",
      },
      {
        img: img3,
        alt: "Man writing a plan",
        width: 1188,
        height: 1413,
        tailwindCss: "h-56 lg:h-64",
      },
    ],
  },
  storyText: {
    heading: "Crafting Spaces, Shaping Dreams",
    p1: "sdfasdfasf",
    p2: "dfadsfasf",
    signature: "/images/Bill_Smith_Signature.svg",
    name: "Bill Smith",
    roleTitle: "CEO and Co-Founder",
  },
};

const Story = ({ className }: IProps) => {
  return (
    <section className={`${className}`}>
      <div className={"container px-4 mx-auto"}>
        <div
          className={"md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7"}
        >
          <div className={"md:w-4/12 self-center space-y-7 mb-7 md:mb-0"}>
            {storyContent.column1.images.map((item, index) => {
              index *= 0.5;
              return (
                <motion.div
                  key={item.alt}
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
                  className={""}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindCss ? item.tailwindCss : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className={"md:w-4/12 space-y-7 mb-7 md:mb-0"}>
            {storyContent.column2.images.map((item, index) => {
              index *= 0.5;
              return (
                <motion.div
                  key={item.alt}
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
                  className={""}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindCss ? item.tailwindCss : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className={"md:w-4/12 self-center spacey-7"}>
            {storyContent.column3.images.map((item, index) => {
              index *= 0.5;
              return (
                <motion.div
                  key={item.alt}
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
                  className={""}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${
                      item.tailwindCss ? item.tailwindCss : ""
                    } !max-w-full object-cover object-center`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className={
            "lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto"
          }
        >
          {storyContent.storyText.heading && (
            <h2 className={"text-2xl md:text-3xl text-gray-800 mb-5"}>
              {storyContent.storyText.heading}
            </h2>
          )}
          {storyContent.storyText.p1 && (
            <p className={"leading-relaxed text-gray-500 mb-7"}>
              {storyContent.storyText.p1}
            </p>
          )}
          {storyContent.storyText.p2 && (
            <p className={"leading-relaxed text-gray-500 mb-7"}>
              {storyContent.storyText.p2}
            </p>
          )}

          <p>
            <Image
              src={storyContent.storyText.signature}
              alt={storyContent.storyText.name}
              width={338}
              height={113}
              className={"w-48 block mb-2"}
            />
            <strong className={"block mb-2 text-gray-800 font-medium"}>
              {storyContent.storyText.name + " "}
              <span className={"text-gray-400"}>
                {storyContent.storyText.roleTitle}
              </span>
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
