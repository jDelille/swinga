import React from "react";

type CheckmarkIconLightProps = {
  size: number;
  color: string;
};

const CheckmarkIconLight: React.FC<CheckmarkIconLightProps> = ({
  size,
 color
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.334 2.75024H7.665C4.644 2.75024 2.75 4.88924 2.75 7.91624V16.0842C2.75 19.1112 4.635 21.2502 7.665 21.2502H16.333C19.364 21.2502 21.25 19.1112 21.25 16.0842V7.91624C21.25 4.88924 19.364 2.75024 16.334 2.75024Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.43945 12.0002L10.8135 14.3732L15.5595 9.6272"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkIconLight;
