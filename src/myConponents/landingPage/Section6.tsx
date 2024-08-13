"use client";
import React from "react";
import Container from "../global/Container";
import HomeCard from "../global/HomeCard";
import { useRouter } from "next/navigation";
import { Card } from "@mui/material";

export default function Section6() {
  const router = useRouter();

  const generalPhysiciansList = [
    {
      specialist: "Fever",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2853/2853863.png",
    },
    {
      specialist: "Cough",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/6701/6701570.png",
    },
    {
      specialist: "Stomach Ache",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2867/2867418.png",
    },
    {
      specialist: "Headaches",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/5730/5730290.png",
    },
    {
      specialist: "Body pains",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/3954/3954171.png",
    },
  ];

  return (
    <div className="mt-4">
      <Container>
        <Card sx={{borderRadius:5}} className="-mx-4 sm:mx-0 border bg-white rounded-3xl md:p-6 p-4">
          <div className="flex gap-2">
            <h2 className="text-rose-600">General</h2>
            <h2 className="text-primary">Physician</h2>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap md:py-2">
            {generalPhysiciansList

              ?.slice(0, 10)
              ?.map((item: any, index: number) => (
                <HomeCard
                  key={index}
                  title={item?.specialist}
                  imageUrl={item?.imageUrl}
                  onClick={() => router.push("/doctors")}
                />
              ))}

            {/* View all */}
            {/* <div className="-mt-6 flex justify-end w-full">
              <button className="view-all">View All</button>
            </div> */}
          </div>
        </Card>
      </Container>
    </div>
  );
}
