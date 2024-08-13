"use client";
import { Container, Divider, Paper } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { BsBookmarkPlus } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import axios from "axios";
import { server } from "@/server";

const Page = ({ searchParams }: any) => {
  const { slug } = searchParams;
  const [blogDetails, setBlogDetails] = useState<any>("");

  useEffect(() => {
    slug && fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data }: any = await axios.get(`${server}/blog/findBySlug`, {
        params: {
          slug,
        },
      });

      setBlogDetails(data?.data);
    } catch (e: any) {
      console.log(e?.response?.data?.message || e?.message);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        <Container maxWidth="md">
          <Paper sx={{ borderRadius: 5 }} className="p-4">
            {/* Heading */}
            <h1 className="mb-6 mt-2 text-primary leading-8">
              {blogDetails?.title}
            </h1>

            {/* Sub heading */}
            <h4 className="my-6 text-gray-500 leading-8">
              {blogDetails?.metaDesc}
            </h4>

            <Divider sx={{ mt: 3, mb: 2 }} />

            {/* Profile */}
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s"
                alt="user_image"
              />

              <div className="">
                {/* Name */}
                <p>{blogDetails?.author}</p>
                <div className="flex items-center gap-2">
                  <p>Read time (6 min)</p>
                  <p>
                    {blogDetails?.createdAt &&
                      new Date(blogDetails?.createdAt)?.toDateString()}
                  </p>
                </div>
              </div>
            </div>

            <Divider sx={{ mb: 2, mt: 2 }} />
            <div className="flex items-center justify-between">
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

            <Divider sx={{ mt: 2 }} />

            {/* Contents */}
            <div>
              {/* Cover Image */}
              <div className="mt-4">
                {/* <img
                className="w-full h-full rounded-3xl"
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*I4Ng4B--fcLMA8TbDNuvFA.jpeg"
                alt="cover_image"
              /> */}
              </div>
            </div>

            {/* Blog contents */}
            <div dangerouslySetInnerHTML={{ __html: blogDetails?.content }} />
          </Paper>
        </Container>
      </div>
    </Suspense>
  );
};

export default Page;
