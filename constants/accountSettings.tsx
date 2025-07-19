import { Bell, Columns3Cog, GlobeLock, LandPlot, ShieldHalf, UserRound } from "lucide-react";

export const sections = [
  {
    name: "Account Information",
    icon: <UserRound size={20} />,
  },
  {
    name: "Playing Profile",
    icon: <LandPlot size={20} />,
  },
  {
    name: "Login & Security",
    icon: <ShieldHalf size={20} />,
  },
  {
    name: "Privacy",
    icon: <GlobeLock size={20} />,
  },
  {
    name: "Notifications",
    icon: <Bell size={20} />,
  },
  {
    name: "Site Preferences",
    icon: <Columns3Cog size={20} />,
  },
];
