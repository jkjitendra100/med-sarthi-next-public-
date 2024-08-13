import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

type HomeCardTypes = {
  onClick: () => void;
  title: string;
  imageUrl: string;
};

export default function HomeCard({ onClick, title, imageUrl }: HomeCardTypes) {
  return (
    <div className="">
      <div className="w-fit">
        <div className="w-20 h-20 mx-auto overflow-hidden rounded-xl bg-gradient-to-t from-cyan-200 to-white">
          <img className="object-cover" src={imageUrl} alt="doctor" />
        </div>
        <div>
          <h6 className="mt-4 mb-0 text-sm sm:text-base truncate-1 text-center">
            {title}
          </h6>
          <div className="mt-2 flex justify-center">
            <Button
              sx={{ borderRadius: 5 }}
              variant="outlined"
              size="small"
              onClick={onClick}
            >
              <div className="text-center text-secondary text-sm">BOOK NOW</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
