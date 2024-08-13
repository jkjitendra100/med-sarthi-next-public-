"use client";
import { Container, Paper } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BsBookmarkPlus } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import axios from "axios";
import { server } from "@/server";
import Link from "next/link";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(`${server}/blog/all`, {
          params: {
            pageNo: 1,
            pageSize: 40,
          },
        });

        setBlogs(data?.data);
      } catch (e: any) {
        console.log(e?.response?.data?.message || e?.message);
      }
    };

    fetchAllBlogs();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="flex flex-col gap-4">
          {blogs?.map((item, index) => (
            <BlogCard blog={item} key={index} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}

const BlogCard = ({ blog }: any) => {
  console.log(blog);

  return (
    <Container maxWidth="md">
      <Paper sx={{ borderRadius: 5 }} className="p-4">
        {/* User Profile */}
        <Link
          href={{
            pathname: "/blogs/details",
            query: { slug: blog?.slug },
          }}
        >
          <img
            className="w-full rounded-xl md:hidden"
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*I4Ng4B--fcLMA8TbDNuvFA.jpeg"
            alt="cover_image"
          />

          <div className="mt-4 md:mt-0 flex gap-6 w-full justify-between items-center">
            <div className="w-full">
              <div className="flex w-ful items-center gap-4">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*I4Ng4B--fcLMA8TbDNuvFA.jpeg"
                  alt="user_image"
                />
                <p className="text-primary capitalize">{blog?.author}</p>
                <p className="">
                  {blog?.createdAt && new Date(blog?.createdAt)?.toDateString()}
                </p>
              </div>

              {/* Heading */}
              <div className="mt-4 mb-0">
                <h2 className="capitalize">{blog?.title}</h2>
              </div>

              {/* Brief description */}
              <div>
                <p className="mt-0 text-gray-400">{blog?.metaDesc}</p>
              </div>

              {/* Time, date, likes, and more... */}
              <div className="mt-6 w-full flex justify-between gap-2 items-center">
                <div className="flex items-center gap-6">
                  {/* Heart */}
                  <div className="flex items-center gap-1">
                    <FaRegHeart className="w-6 h-6" />
                    <p>24</p>
                  </div>

                  {/* Comment */}
                  <div className="flex items-center gap-1">
                    <FaRegCommentDots className="w-6 h-6" />
                    <p>24</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Save for letter */}
                  <div className="flex items-center gap-1">
                    <BsBookmarkPlus className="w-6 h-6" />
                  </div>

                  {/* Play */}
                  <div className="flex items-center gap-1">
                    <CiPlay1 className="w-6 h-6" />
                  </div>

                  {/* Share */}
                  <div className="flex items-center gap-1">
                    <BsShare className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-4">
              <img
                className="w-80 rounded-xl hidden md:block"
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*I4Ng4B--fcLMA8TbDNuvFA.jpeg"
                alt="cover_image"
              />
            </div>
          </div>
        </Link>
      </Paper>
    </Container>
  );
};
