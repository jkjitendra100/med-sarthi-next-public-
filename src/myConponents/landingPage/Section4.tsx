"use client";
import React from "react";
import Container from "../global/Container";
import HomeCard from "../global/HomeCard";
import { useRouter } from "next/navigation";
import { Card } from "@mui/material";

export default function Section4() {
  const router = useRouter();
  const mostSearchedSpecialistsList = [
    {
      specialist: "General Medicine",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/9562/9562871.png",
    },
    {
      specialist: "Dermatology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2885/2885281.png",
    },
    {
      specialist: "Dental",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/1386/1386830.png",
    },
    {
      specialist: "Ophthalmology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2857/2857950.png",
    },
    {
      specialist: "Orthopedics",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/7350/7350861.png",
    },
    {
      specialist: "Pediatrics",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/8123/8123474.png",
    },
    {
      specialist: "Obstetrics Gynecology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/11816/11816417.png",
    },
    {
      specialist: "Cardiology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/10154/10154414.png",
    },
    {
      specialist: "Neurology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/6969/6969711.png",
    },
    {
      specialist: "Psychology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/10372/10372013.png",
    },
    {
      specialist: "Oncology",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/8358/8358506.png",
    },
  ];

  return (
    <div className="mt-8">
      <Container>
        <Card sx={{borderRadius:5}} className="-mx-4 sm:mx-0 border bg-white rounded-3xl md:p-6 p-4">
          <div className="flex gap-2">
            <h2 className="text-rose-600">Most Searched</h2>
            <h2 className="text-primary">Specialities</h2>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap md:py-2">
            {mostSearchedSpecialistsList
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
