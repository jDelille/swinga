"use client";

import React, { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";
import { useTheme } from "next-themes";
import { ThemeIcon } from "@/icons";

type ThemeToggleProps = {};
const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {isDark ? (
        <ThemeIcon
          size={22}
          color="white"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        />
      ) : (
        <ThemeIcon
          size={22}
          color="gray"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        />
      )}
    </>
  );
};

export default ThemeToggle;
