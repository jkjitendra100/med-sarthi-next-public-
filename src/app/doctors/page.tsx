"use client";
import DoctorsCard from "@/myConponents/global/DoctorsCard";
import UnderConstruction from "@/myConponents/global/UnderConstruction";
import { server } from "@/server";
import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const { data } = await axios.get(`${server}/doctor/all`, {
          params: {
            pageNo: 1,
            pageSize: 10,
          },
        });
        console.log(data);

        setDoctors(data?.data);
      } catch (e: any) {
        console.log(e?.response?.data?.message || e?.message);
      }
    };

    fetchAllDoctors();
  }, []);

  console.log(doctors);

  return (
    <Container maxWidth="xl" className="">
      <div className="">
        <div className="flex gap-4 flex-col">
          {doctors?.map((item: any, index: number) => (
            <DoctorsCard
              key={index}
              doctor={item}
              onClickShare={function (): void {
                throw new Error("Function not implemented.");
              }}
              onClickViewDoctorDetails={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>
      </div>

      {/* <div className="lg:hidden">
        <UnderConstruction />
      </div> */}
    </Container>
  );
}
