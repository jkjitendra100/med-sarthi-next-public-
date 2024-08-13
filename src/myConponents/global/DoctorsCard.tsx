"use client";

import { Button, IconButton, Paper } from "@mui/material";
import { State } from "country-state-city";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { HiShare } from "react-icons/hi";

type propType = {
  doctor: any;
  onClickShare: () => void;
  onClickViewDoctorDetails: () => void;
};

export default function DoctorsCard({
  doctor,
  onClickShare,
  onClickViewDoctorDetails,
}: propType) {
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: "/bookAppointment",
        query: {
          doctorId: doctor?._id,
        },
      }}
    >
      <Paper className="p-4 w-full" sx={{ borderRadius: 5 }}>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-between gap-4">
          {/* Image */}
          <div className="col-spa-2 sm:w-40">
            <img
              alt="doctor-image"
              src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png"
              className="w-32 h-32 mx-auto"
            />
            <div className="text-center">
              <Button
                variant="text"
                className="test-xs font-semibold"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={onClickViewDoctorDetails}
              >
                View Details
              </Button>
            </div>
          </div>

          {/* Name and address */}
          <div className="col-spa-3 flex flex-col gap-1 items-start">
            <p className="text-left font-semibold text-lg text-primary capitalize">
              {doctor?.name}
            </p>
            <p className="text-left font-semibold capitalize">
              {doctor?.designation}
            </p>
            <p className="text-left capitalize">{doctor?.Registrations}</p>
            <p className="flex items-center justify-start gap-1">
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png"
                alt="location"
              />
              {`${doctor?.city} ${
                State?.getAllStates()?.find((e) => e?.isoCode === doctor?.state)
                  ?.name
              }`}
            </p>
          </div>

          {/* Experience */}
          <div className="col-spa-4 flex flex-col gap-1 items-start">
            <p className="text-left">
              Experience -{" "}
              <b className="font-semibold text-gray-600">
                {doctor?.experienceInYears} Years
              </b>
            </p>
            {doctor?.languages?.length > 0 && (
              <p className="text-left">
                Languages -{" "}
                <b className="font-semibold text-gray-600 capitalize">
                  {doctor?.languages?.join?.(", ")}
                </b>
              </p>
            )}
            <p className="text-left flex items-center text-sm text-green-600 gap-1 bg-green-100 rounded-full pr-2">
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png"
                alt="location"
              />
              Medical Registration Verified
            </p>
          </div>

          {/* Book appointment */}
          <div className="col-spa-3">
            <div className="flex lg:justify-center gap-1">
              <div className="w-fit">
                <div className="flex items-center gap-4">
                  <Button
                    sx={{
                      borderRadius: 5,
                      size: { xs: "small", md: "medium" },
                    }}
                    variant="contained"
                    onMouseDown={(e: any) => e.stopPropagation()}
                    onClick={() => router.push("bookAppointment")}
                  >
                    Book Appointment
                    <GiCheckMark className="text-white" />
                  </Button>
                  <IconButton
                    onMouseDown={(e: any) => e.stopPropagation()}
                    onClick={onClickShare}
                  >
                    <HiShare className="text-primary" />
                  </IconButton>
                </div>
                <p className="mt-4 mr-12 lg:text-center font-semibold text-primary">
                  ₹299.00/- only
                </p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Link>
  );
}
