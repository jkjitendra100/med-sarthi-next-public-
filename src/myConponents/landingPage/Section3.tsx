import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { Button, Card } from "@mui/material";

export default function Section3() {
  const hospitalsList = [
    {
      name: "Dr. Sandeep Vaishya",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/06/ashok-1.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Director, MBBS, MS, MCh, Fellowship",
      experienceInYears: "20",
      contactDetails: {
        phone: "",
      },
      specialties: [],
    },

    {
      name: "Dr. Bhaba Nanda Das",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/05/Dr.-SANDEEP-VAISHYA.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Surgeon Chief , MBBS",
      experienceInYears: "36",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Veena Kalra",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/05/Dr-Bhaba-Nanda-Das.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Senior Consultant , MBBS, MD",
      experienceInYears: "37",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Nandita P. Palshetkar",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/05/Dr.-Veena-Kalra.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Director , MBBS, MD",
      experienceInYears: "20",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Ashok Rajgopal",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/05/Nandita.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Chairman, MBBS, MS, MCh, FRCS",
      experienceInYears: "47",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Arun Saroha",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/05/Dr.-Vivek-Raj.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Head of Department , MBBS, MS, MCh",
      experienceInYears: "19",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Vivek Raj",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/06/SUBHASH.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Director , MBBS, FRCP",
      experienceInYears: "24",
      stabilizedInYear: "",
    },

    {
      name: "Dr. Subhash Jangid",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.alafiyameditour.com/wp-content/uploads/2019/06/manav.jpg",
          docPath: "",
          docType: "",
        },
      ],
      designation: "Head of Department, DNB, MS, MBBS",
      experienceInYears: "22",
      stabilizedInYear: "",
    },
  ];
  return (
    <div className="mt-4">
      <Container>
        <Card sx={{borderRadius:5}} className="-mx-4 border sm:mx-0 bg-white rounded-3xl md:md:p-6 p-4">
          <div className="flex gap-2 justify-between items-start">
            <h2 className="text-primary">
              <b className="text-rose-600">Best Doctors </b> In 2024
            </h2>
            <div className="-mt-1">
              <Button sx={{ borderRadius: 5 }} variant="outlined" size="small">
                View All
              </Button>
            </div>
          </div>
          <div className="flex md:py-2 gap-4 overflow-x-scroll">
            {hospitalsList?.slice(0, 10)?.map((item: any, index: number) => (
              <div key={index} className="w-full py-4">
                <div className="overflow-hidden w-40 h-60 rounded-3xl bg-gradient-to-t from-gray-200 to-white">
                  <img
                    className="rounded-2xl w-full h-full object-cover border"
                    src={item?.images?.[0]?.docUrl}
                    alt="hospital"
                  />
                </div>
                <div>
                  <h5 className="mt-2 text-base mb-1 truncate-1 text-primary">
                    {item?.name}
                  </h5>
                  <p className="truncate-2 text-xs">{item?.designation}</p>
                  <p className="truncate-2 text-xs">
                    Experience:{" "}
                    <b className="text-rose-600 text-xs">
                      {item?.experienceInYears} years
                    </b>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}
