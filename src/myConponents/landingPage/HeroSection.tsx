"use client";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../global/Container";
import { Country, City, State } from "country-state-city";
import { useForm } from "react-hook-form";
import { servicesList } from "@/jsonFiles/servicesList";
import { Button, Card } from "@mui/material";

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedState, setSelectedState] = useState<string>("");

  let statesList: any = State.getAllStates()?.filter(
    (e) => e?.countryCode === "IN"
  );
  let citiesList: any = City.getAllCities()?.filter(
    (e) => e?.stateCode === selectedState
  );

  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <div className="-m-4">
      {/* For large screens (Above sm) */}
      <div className="hidden sm:block bg-gradient-to-r from-primary to-secondary md:md:py-10 py-4 py-4 px-4">
        {/* Grid */}
        <Container className="mx-auto md:md:py-10 py-4 py-6 sm:grid grid-cols-2 gap-4 bg-white md:p-10 p-4 rounded-3xl grid-flow-col-reverse">
          {/* 1st section */}
          <div className="flex items-center justify-center ">
            <div>
              <img
                className="h-10 md:h-16 lg:h-full"
                src="/assets/images/logo.jpeg"
                alt="logo"
              />

              <p className="mt-4 text-sm text-gray-500 hidden lg:block">
                {`Our platform simplifies your healthcare journey by helping you
              find the best hospitals, top doctors, nearby medical facilities,
              and blood donation camps effortlessly. With location-based
              services and expert doctor consultations, we ensure you get the
              care you need when you need it. Experience a new level of
              healthcare accessibility and make informed decisions with ease.`}
              </p>

              <p className="mt-4 text-sm text-gray-500 lg:hidden">
                {`Our platform simplifies your healthcare journey by helping you
              find the best hospitals, top doctors, nearby medical facilities,
              and blood donation camps effortlessly.`}
              </p>

              {/* Buttons */}

              <div className="mt-6 flex gap-10 md:p-10 p-4 justify-center">
                <Button
                  variant="outlined"
                  className=""
                  sx={{ borderRadius: 5 }}
                  size="small"
                >
                  Explore
                </Button>

                <Button
                  variant="outlined"
                  className=""
                  sx={{ borderRadius: 5 }}
                  size="small"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>

          {/* 2nd section */}
          <div className="flex items-center justify-center h-full">
            <div className="">
              <img
                className="rounded-3xl relative"
                src="https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="doctor"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* For small screens (Below sm) */}
      <div className="p-4 sm:hidden">
        <div className="">
          <img
            className="rounded-3xl relative"
            src="https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="doctor"
          />
        </div>
      </div>

      {/* Search section */}
      <div className="bg-slate-200 mt-4 md:py-10 py-4">
        <Container>
          <Card className="md:p-10 p-4 bg-white rounded-3xl">
            <div className="flex items-baseline gap-2">
              <h2 className="font-bold text-primary leading-7">
                <b className="text-rose-600 ">Find</b> Hospitals, Doctors,
                Clinics and more...
              </h2>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(handleSearch)}>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="w-full">
                  <p className="ml-4 text-sm text-primary">Select state</p>
                  <select
                    className="p-3 text-primary bg-white rounded-3xl focus:outline-none border border-primary w-full"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {statesList?.map((e: any, index: number) => (
                      <option key={index} value={e?.isoCode}>
                        {e?.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full">
                  <p className="ml-4 text-sm text-primary">Select city</p>
                  <select
                    className="p-3 text-primary bg-white rounded-3xl focus:outline-none border border-primary w-full"
                    {...register("city", { required: true })}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {citiesList
                      ?.filter(
                        (e: any) =>
                          e?.stateCode === selectedState &&
                          e?.countryCode === "IN"
                      )
                      ?.map((e: any, index: number) => (
                        <option key={index} value={e?.name}>
                          {e?.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="w-full">
                  <p className="ml-4 text-sm text-primary">Select service</p>
                  <select
                    className="p-3 text-primary bg-white rounded-3xl focus:outline-none border border-primary w-full"
                    {...register("service", { required: true })}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {servicesList?.map((e: any, index: number) => (
                      <option className="" key={index} value={e?.slug}>
                        {e?.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full p-3 mt-[20px] rounded-3xl text-sm text-white bg-primary hover:bg-secondary duration-500"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
          </Card>
        </Container>
      </div>
    </div>
  );
}
