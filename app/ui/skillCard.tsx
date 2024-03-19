"use client";

import { useState } from "react";
import StarRating from "./starRating";

type Props = {
  label: string;
  value: number;
  subskills: {
    label: string;
    value: number;
  }[];
};
const SkillCard = ({ label, value, subskills }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`border border-gray-300 shadow-md rounded-md p-4 bg-parchment transition-transform transform  w-64 h-80 ${
        hovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold mb-2">{label}</h2>
          <div className="text-lg font-bold rounded-full bg-parchment-lighter h-12 w-12 center">
            {value}
          </div>
        </div>
      </div>
      {subskills.map((s) => (
        <div key={s.label} className="p-2 bg-parchment-lighter mb-2 rounded">
          <div>{s.label}</div>
          <StarRating value={s.value} />
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
