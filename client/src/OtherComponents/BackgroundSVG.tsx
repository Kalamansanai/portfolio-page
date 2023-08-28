import React from "react";
import svgData from "../data/svgData.json";
import { BackgroundSVGProps } from "../types";
import { AllSVGData } from "../types";

const BackgroundSVG: React.FC<BackgroundSVGProps> = ({ direction }) => {
  const allSVGData = svgData as AllSVGData;
  const key = `Background${direction.charAt(0).toUpperCase() + direction.slice(1)}SVG` as keyof AllSVGData;

  const { common, paths, clipPath } = allSVGData[key];
  return (
    <svg {...common}>
      <g clipPath={`url(#${clipPath.id})`}>
        {paths.map((path, index) => (
          <path key={index} {...path} />
        ))}
      </g>
      <defs>
        <clipPath id={clipPath.id}>
          <rect {...clipPath} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackgroundSVG;
