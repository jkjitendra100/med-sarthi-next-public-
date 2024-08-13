import React from "react";
import Container from "../global/Container";
import { Button, Card, Paper } from "@mui/material";

export default function Section2() {
  const hospitalsList = [
    {
      name: "Medanta The Medicity",
      description:
        "Medanta – The Medicity is a multi-super specialty hospital located in Gurgaon, India. It was founded in 2009 by renowned cardiac surgeon, Dr. Naresh Trehan. The hospital offers a wide range of medical and surgical services, including cardiology, oncology, neurology, orthopedics, and more. With state-of-the-art facilities and a team of experienced medical professionals, Medanta is considered one of the leading hospitals in India. The hospital also has a strong commitment to research and education, with various programs aimed at improving patient care and advancing the field of medicine. Overall, Medanta is known for its high standards of patient care and its dedication to providing top-quality medical services to people in India and around the world.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/2020/03/Fortis-Hospital-1-768x512.jpg",
          docPath: "",
          docType: "",
        },
      ],
      address: "",
      phone: "",
      stabilizedInYear: "",
      specialties: [],
      doctors: [
        {
          name: "",
          specialty: "",
          contact: "",
        },
      ],
    },

    {
      name: "Fortis Memorial Research Institute",
      description:
        "Fortis Memorial Research Institute (FMRI) is a multi-specialty hospital located in Gurgaon, Haryana, India. It is a part of the Fortis Healthcare network, which is one of the largest healthcare providers in the country. FMRI is known for its state-of-the-art facilities and cutting-edge technology, and is recognized as a center of excellence for various specialties such as cardiology, neurology, oncology, and more. The hospital has a team of highly skilled medical professionals, including experienced doctors, nurses, and support staff, who are committed to providing the best possible care to patients. In addition to offering a wide range of medical services, FMRI also places a strong emphasis on research and education, and has partnerships with several universities and research organizations. Overall, FMRI is regarded as one of the top hospitals in India and is a popular choice for patients seeking quality medical care.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/W-pratiksha-Hospitals-onbj0bm10sl3eywj4mq521tb6jemga68ugyiko2d28.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Artemis Hospital",
      description:
        "Artemis Hospital in Gurgaon was established in 2007 with a mission to deliver world-class healthcare procedures. It is a multi-specialty hospital offering a wide array of medical care services spread across 9 acres, is a 400 plus bed; state-of-the-art multi-specialty hospital located in Gurgaon, India. Artemis Hospital is the first JCI and NABH accredited hospital in Gurgaon and became a proactive partner in the local community initiatives.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/2020/03/Apollo-Hospitals--768x432.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Apollo Hospitals",
      description:
        "The Apollo Hospitals Group was incorporated as a Public Limited Company in the year 1979, promoted by Dr. Prathap C. Reddy, Executive Chairman. The hospitals have been recognized as the ‘Architect of Modern Healthcare’ in India. Apollo hospitals have emerged as Asia’s foremost integrated healthcare services provider and have a strong presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics. ",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/Max-Hospital-1-onbi1vswmbfw1axf88t878obnb5hfigag0h2kp4n1c.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Max Hospitals",
      description:
        "One of the leading Healthcare institutes Max Healthcare Institute is a hospital chain based in New Delhi, India with 14 hospitals across North India committed to providing quality medical care to the community. Max Super Specialty Hospital in Saket was founded in 2006 and established as a part of the Max Healthcare consortium and a unit of Devki Devi Foundation and listed in the Bombay Stock Exchange and National Stock Exchange with more than 37,000 shareholders. Max is a public limited company and several of its hospitals are NABH Accredited.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/2020/03/MANIPAL-HOSPITALS-1.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Manipal Hospitals",
      description:
        "Manipal Hospitals is 380 bedded multi-specialty healthcare providers catering to both Indian and international patients. It is one of India’s foremost hospitals that aim at providing specialized tertiary and quaternary care. Manipal hospital is a part of the Manipal Education and Medical Group (MEMG) – a leader in the areas of education and healthcare. With more than 5000 operational beds, their hospitals provide quality and affordable healthcare to everyone.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/jaypee-hospital-onbiqblub8w9wbfgit4112nrnyp1k7h1sz3jrow59c.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "BLK super Specialty Hospital",
      description:
        "BLK Super Specialty Hospital is one of the largest tertiary care private hospitals founded by Dr. B. L. Kapur on 2 January 1959 and inaugurated by then Prime Minister of India, Pt. Jawaharlal Nehru. The hospital provides a range of services that make the Hospital a force to reckon with in the field of Super Specialty Tertiary Healthcare. This comprehensive tertiary care hospital is spread over 5 acres of land with a capacity of 700 beds expanded with the vision of providing patient-centric medical care services focused on cutting-edge technology.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/narayana-superspeciality-hospital-onbioiqz7ofhn81o1j2rr10yodkpt3bkk231nlkb6o.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Narayana Superspeciality Hospital",
      description:
        "Narayana Superspeciality Hospital is located close to DLF Cyber City and the Delhi – Jaipur Highway; it is a world-class medical facility catering to the healthcare needs of the NCR region. Backed with latest medical infrastructure and proficient medical professionals, the hospital represents Narayana Health’s commitment to quality medical care and patient service.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/W-pratiksha-Hospitals-onbj0bm10sl3eywj4mq521tb6jemga68ugyiko2d28.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },

    {
      name: "Jaypee Hospital",
      description:
        "The Jaypee Hospital is the flagship hospital of the Jaypee group established in 2013, conceptualized by Shri Jai Prakash Gaur this flagship healthcare center of Jaypee Group is located in the Sector-128, Noida which is easily accessible from New Delhi, Noida, and Yamuna Expressway. The hospital is spread over the sprawling landscape of 25 acres, this facility embarks upon its modern architecture built in accordance with the globally-accepted standards for the healthcare institutes to provide high-tech medical care to the masses. This hospital has been intended and designed as a 1200 bedded tertiary care multi-specialty facility and has commissioned 525 beds in the first phase.",
      country: "India",
      state: "",
      city: "",
      images: [
        {
          docUrl:
            "https://www.medicarespots.com/wp-content/uploads/elementor/thumbs/jaypee-hospital-onbiqblub8w9wbfgit4112nrnyp1k7h1sz3jrow59c.jpg",
          docPath: "",
          docType: "",
        },
      ],
      stabilizedInYear: "",
    },
  ];

  return (
    <div className="mt-4">
      <Container>
        <Card
          sx={{ borderRadius: 5 }}
          className="-mx-4 border sm:mx-0 bg-white rounded-3xl md:md:p-6 p-4"
        >
          <div className="flex gap-2 justify-between items-start">
            <h2 className="text-primary">
              <b className="text-rose-600">Best Hospitals </b> In 2024
            </h2>
            <div className="-mt-1">
              <Button sx={{ borderRadius: 5 }} variant="outlined" size="small">
                View All
              </Button>
            </div>
          </div>
          <div className="flex md:py-2 gap-4 overflow-x-scroll">
            {hospitalsList?.slice(0, 8)?.map((item: any, index: number) => (
              <div key={index} className="w-full py-4">
                <div className="overflow-hidden w-60 h-40 rounded-3xl bg-gradient-to-t from-gray-200 to-white">
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
                  <p className="truncate-2 text-xs">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}
