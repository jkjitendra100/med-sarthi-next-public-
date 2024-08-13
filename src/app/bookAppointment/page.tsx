"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { HiShare } from "react-icons/hi";
import { FaArrowUpLong } from "react-icons/fa6";
import axios from "axios";
import { server } from "@/server";
import { State } from "country-state-city";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  //  const searchParams = useSearchParams();
  const [profileDescription, setProfileDescription] = useState<boolean>(true);
  // const doctorId = searchParams.get("doctorId") ?? null;
  const [doctorDetails, setDoctorDetails] = useState<any>("");

  const [selectedTimingSlot, setSelectedTimingSlot] = useState<any>({
    shift: "",
    time: "",
  });

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    //   try {
    //     const { data }: any = await axios.get(
    //       `${server}/doctor/getDoctorById/${doctorId}`
    //     );
    //     console.log(data);
    //     setDoctorDetails(data?.data);
    //   } catch (e: any) {
    //     console.log(e?.response?.data?.message || e?.message);
    //   }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container maxWidth="xl">
        {/* Doctor Card */}
        <Paper className="p-4 w-full" sx={{ borderRadius: 5 }}>
          <div className="md:grid lg:grid-cols-4 md:grid-cols-2 items-center justify-between">
            {/* Image */}
            <div>
              <img
                alt="doctor-image"
                src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png"
                className="w-32 h-32 mx-auto md:mx-0 lg:mx-auto"
              />
            </div>

            {/* Name and address */}
            <div className="flex flex-col gap-1 items-start">
              <p className="font-semibold text-primary text-lg text-center md:text-left w-full">
                {doctorDetails?.name}
              </p>
              <p className="text-left font-semibold capitalize">
                {doctorDetails?.designation}
              </p>
              <p className="text-left capitalize">
                {doctorDetails?.Registrations}
              </p>
              <p className="flex items-center gap-1">
                <img
                  className="w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png"
                  alt="location"
                />
                {`${doctorDetails?.city} ${
                  State?.getAllStates()?.find(
                    (e) => e?.isoCode === doctorDetails?.state
                  )?.name
                }`}
              </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-1 items-start">
              <p>
                Experience -{" "}
                <b className="font-semibold text-gray-600">
                  {doctorDetails?.experienceInYears} Years
                </b>
              </p>
              {doctorDetails?.languages?.length > 0 && (
                <p>
                  Languages -{" "}
                  <b className="font-semibold text-gray-600">
                    {doctorDetails?.languages?.join?.(", ")}
                  </b>
                </p>
              )}
              <p className="flex items-center text-sm text-green-600 gap-1 bg-green-100 rounded-full pr-2">
                <img
                  className="w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png"
                  alt="location"
                />
                Medical Registration Verified
              </p>
            </div>

            {/* Book appointment */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-fit">
                <div className="text-sm text-primary rounded-3xl flex items-center gap-2 p-2 px-6 bg-blue-50">
                  Consultation Fee
                </div>
                <p className="mt-4 text-center font-semibold text-primary">
                  ₹299.00/- only
                </p>
              </div>
              <div>
                <IconButton onClick={() => alert("share")}>
                  <HiShare className="text-primary" />
                </IconButton>
              </div>
            </div>
          </div>
        </Paper>

        {/* About doctor and consultations */}
        <div className="lg:grid grid-cols-2 gap-4 mt-4">
          {/* About doctor */}
          <Paper className="" sx={{ borderRadius: 5 }}>
            <div className="p-4">
              <div className="flex items-center p-2 bg-blue-100 rounded-3xl">
                <button
                  className={`px-6 py-2 font-semibold outline-none ${
                    profileDescription && "bg-primary text-white rounded-3xl"
                  }`}
                  onClick={() => setProfileDescription(true)}
                >
                  About the doctor
                </button>
                <button
                  className={`px-6 py-2 font-semibold outline-none ${
                    !profileDescription && "bg-primary text-white rounded-3xl"
                  }`}
                  onClick={() => setProfileDescription(false)}
                >
                  Services
                </button>
              </div>

              <Divider className="my-4" />

              {/* Profile Descriptions */}
              {profileDescription && (
                <div>
                  <h4 className="text-primary">Profile Description</h4>
                  <p>{doctorDetails?.profileDescription || "N/A"}</p>

                  <h4 className="mt-6 text-primary">Qualifications</h4>
                  <p>{doctorDetails?.qualifications || "N/A"}</p>
                  <h4 className="mt-6 text-primary">Registrations</h4>
                  <p>{doctorDetails?.registrations || "N/A"}</p>
                  <h4 className="mt-6 text-primary">Awards and Recognitions</h4>
                  <p>{doctorDetails?.awardsAndRecognitions || "N/A"}</p>
                  <h4 className="mt-6 text-primary">Research & Publications</h4>
                  <p>{doctorDetails?.researchAndPublications || "N/A"}</p>
                </div>
              )}

              {/* Services */}
              {!profileDescription && (
                <div>
                  <h4 className="text-primary"> Medical Conditions Treated:</h4>
                  <ul className="list-disc list-inside">
                    {doctorDetails?.services?.map(
                      (item: any, index: number) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </Paper>

          {/* About appointments */}
          <Paper sx={{ borderRadius: 5 }}>
            <div className="p-4 lg:p-4 mt-4 lg:mt-0">
              <div className="md:flex gap-4 items-center">
                <div className="flex items-center gap-4">
                  <p className="uppercase font-semibold">Choose Date</p>
                  <TextField
                    type="date"
                    className=""
                    size="small"
                    InputProps={{
                      inputProps: {
                        min: new Date()?.toISOString()?.split("T")?.[0],
                        defaultValue: new Date()
                          ?.toISOString()
                          ?.split("T")?.[0],
                      },
                    }}
                  />
                </div>
                <div className="hidden lg:block">
                  <Link
                    className="bg-primary w-full text-white rounded-3xl px-4 py-2"
                    href={{
                      pathname: "confirmAppointment",
                      query: { doctorId: doctorDetails?._id },
                    }}
                  >
                    BOOK APPOINTMENT
                  </Link>
                </div>
              </div>

              {/* Available timings */}
              <h4>Available Timings (IST)</h4>
              <h4 className="mt-4">Morning</h4>
              <div className="flex items-center justify-start flex-wrap gap-2">
                {doctorDetails?.timingSlots?.morning?.map(
                  (item: any, index: number) => (
                    <div
                      className={`cursor-pointer p-2 border border-primary rounded text-primary font-semibold duration-300
                    ${
                      selectedTimingSlot?.time === item
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                      key={index}
                      onClick={() =>
                        setSelectedTimingSlot({
                          shift: "morning",
                          time: item,
                        })
                      }
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <h4 className="mt-4">Afternoon</h4>
              <div className="flex items-center justify-start flex-wrap gap-2">
                {doctorDetails?.timingSlots?.afternoon?.map(
                  (item: any, index: number) => (
                    <div
                      className={`cursor-pointer p-2 border border-primary rounded text-primary font-semibold duration-300
                    ${
                      selectedTimingSlot?.time === item
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                      key={index}
                      onClick={() =>
                        setSelectedTimingSlot({
                          shift: "afternoon",
                          time: item,
                        })
                      }
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <h4 className="mt-4">Evening</h4>
              <div className="flex items-center justify-start flex-wrap gap-2">
                {doctorDetails?.timingSlots?.evening?.map(
                  (item: any, index: number) => (
                    <div
                      className={`cursor-pointer p-2 border border-primary rounded text-primary font-semibold duration-300
                    ${
                      selectedTimingSlot?.time === item
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                      key={index}
                      onClick={() =>
                        setSelectedTimingSlot({
                          shift: "evening",
                          time: item,
                        })
                      }
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 w-full lg:hidden">
                <Link
                  className="block bg-primary w-full text-white rounded-3xl px-4 py-3 text-center"
                  href={{
                    pathname: "/confirmAppointment",
                    query: { doctorId: doctorDetails?._id },
                  }}
                >
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          </Paper>
        </div>

        <FAQs />
      </Container>
    </Suspense>
  );
}

const FAQs = () => {
  return (
    <div className="mt-4 lg:p-6 sm:p-3 p-2 py-4 bg-blue-50 rounded-3xl border">
      <h2>FAQs</h2>

      <div>
        {[1, 2, 3, 4, 5]?.map((item: any, index: number) => (
          <Accordion key={index} className="my-1">
            <AccordionSummary
              expandIcon={<FaArrowUpLong />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                What can i consult a general physician for through medsarthi
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {`Medsarthi allows you to consult a general physician for a range
                of common health concerns. These may include minor illnesses,
                general health inquiries, medication refills, advice on managing
                chronic conditions, preventive care, and non-emergency medical
                issues.`}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <p className="mt-6">
          <b>Note:</b>{" "}
          {`These FAQs are intended to provide general information
          for consulting a general physician online through the Medicas
          platform. For specific inquiries or concerns, it is recommended to
          refer contact our customer support number 90534 90543 (India) | +1 868
          365 2800 (Caribbean) for further assistance.`}
        </p>
      </div>
    </div>
  );
};
