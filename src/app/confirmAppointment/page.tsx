"use client";
import { server } from "@/server";
import { Paper, Container, Button } from "@mui/material";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  // const searchParams = useSearchParams();
  // const doctorId = searchParams.get("doctorId") ?? null;
  const [doctorDetails, setDoctorDetails] = useState<any>("");

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    // try {
    //   const { data }: any = await axios.get(
    //     `${server}/doctor/getDoctorById/${doctorId}`
    //   );
    //   setDoctorDetails(data?.data);
    // } catch (e: any) {
    //   console.log(e?.response?.data?.message || e?.message);
    // }
  };

  return (
    <Container maxWidth="xl">
      <h3 className="text-primary mt-2 md:mt-0">Appointment Details</h3>
      {/* About doctor */}
      <div className="lg:grid grid-cols-2 gap-4">
        {/* Doctor Image */}
        <div>
          <Paper sx={{ borderRadius: 5 }} className="p-4">
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex flex-col justify-center">
                <div>
                  <img
                    className="w-40 h-40 mx-auto"
                    src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png"
                    alt="doctor_photo"
                  />
                  <p className="text-center font-semibold mt-2">
                    Reg. No.: MS-6565
                  </p>
                </div>
              </div>

              <div className="col-span-2 w-full">
                <p className="font-semibold text-primary">
                  {doctorDetails?.name}
                </p>
                <p className="font-semibold">{doctorDetails?.designation}</p>
                <p className="">Speciality: {doctorDetails?.designation}</p>
                <p className="capitalize">
                  Languages: {doctorDetails?.languages?.join(", ")}
                </p>

                <div className="p-2 bg-blue-100 rounded-lg mt-4 text-center">
                  Consultation Fee: <b className="font-bold">299.00</b>
                </div>
              </div>
            </div>
          </Paper>
        </div>

        {/* Patient Information */}
        <Paper className="p-4 mt-4 lg:mt-0" sx={{ borderRadius: 5 }}>
          <div className="flex items-center justify-between">
            <h4 className="text-primary">This Appointment is For</h4>

            <Button
              variant="contained"
              sx={{ borderRadius: 5, py: 0.5 }}
              size="small"
            >
              Add Patient
            </Button>
          </div>
          <div className="mt-4 flex gap-2 flex-col">
            {/* Map patient profiles */}
            {[1, 2, 3]?.map((item: any, index: number) => (
              <div
                key={index}
                className="border rounded-xl border-gray-400 p-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="w-16 h-16 rounded-full border"
                    src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
                  />

                  <div>
                    <p>Jitendra Kumar</p>
                    <p className="flex items-center gap-2">
                      18 years, Male
                      <Button size="small">Edit</Button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complaint input */}
          <textarea
            className="mt-4 w-full border border-gray-300 focus:outline-primary rounded-xl p-4"
            rows={4}
            placeholder="Enter complaint"
          />

          {/* File Upload */}
          <input
            className="p-4 mt-2 w-full border rounded-xl border-gray-300"
            type="file"
          />

          <div className="mt-4">
            <p className="text-primary font-semibold">Billing Details</p>
            <div className="p-4 border border-primary rounded-xl font-semibold">
              <div className="flex items-center justify-between">
                <p>Consultation Fee</p>
                <p>₹ 299.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p>Convenience Fee</p>
                <p>₹ 14.95</p>
              </div>

              <div className="flex items-center justify-between">
                <p>Tax Fee (18.00)%:</p>
                <p>₹ 2.69</p>
              </div>

              <div className="flex items-center justify-between">
                <p>NetAmount Fee:</p>
                <p>₹ 316.64</p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </Container>
  );
}
