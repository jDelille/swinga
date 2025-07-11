import React from "react";

type ThemeIconProps = {
  size: number;
  color: string;
  onClick: () => void;
};

const ThemeIcon: React.FC<ThemeIconProps> = ({ size, color, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
<circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
<path d="M12 5V3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M12 21V19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M16.9498 7.05025L18.364 5.63604" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M5.63608 18.364L7.05029 16.9497" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M19 12L21 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M3 12L5 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M16.9498 16.9497L18.364 18.364" stroke={color} strokeWidth="2" strokeLinecap="round"/>
<path d="M5.63608 5.63603L7.05029 7.05025" stroke={color} strokeWidth="2" strokeLinecap="round"/>

    </svg>
  );
};

export default ThemeIcon;
