"use client";
import React from "react";
import Container from "../global/Container";
import HomeCard from "../global/HomeCard";
import { useRouter } from "next/navigation";
import { Card } from "@mui/material";

export default function Section5() {
  const router = useRouter();

  const commonSymptomsList = [
    {
      specialist: "Fever",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2853/2853863.png",
    },
    {
      specialist: "Cough",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/6701/6701570.png",
    },
    {
      specialist: "Running Nose",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2037/2037981.png",
    },
    {
      specialist: "Tiredness",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/4842/4842080.png",
    },
    {
      specialist: "Sore Throat",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/9263/9263295.png",
    },
    {
      specialist: "Headache",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/5730/5730290.png",
    },
    {
      specialist: "Skin Rashes",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/6604/6604399.png",
    },
    {
      specialist: "Diarrhea",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2750/2750734.png",
    },
  ];

  return (
    <div className="mt-4">
      <Container>
        <Card sx={{borderRadius:5}} className="-mx-4 sm:mx-0 border bg-white rounded-3xl md:p-6 p-4">
          <div className="flex gap-2">
            <h2 className="text-rose-600">Common</h2>
            <h2 className="text-primary">Symptoms</h2>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap md:py-2">
            {commonSymptomsList
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
