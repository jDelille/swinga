"use client";
import React, { useRef, useState, useEffect } from "react";
import { ShotData } from "@/types/shotData";
import { useDragScroll } from "@/hooks/dragScroll/useDragScroll";
import styles from "./Table.module.scss";

type TableProps = {
  shots: ShotData[];
};

const Table: React.FC<TableProps> = ({ shots }) => {
  const dragRef = useDragScroll<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [fadeHidden, setFadeHidden] = useState(false);

  // Check scroll to hide fade when at end
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    setFadeHidden(atEnd);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial state
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const columns = [
    "Club",
    " Dynamic Loft",
    "Ball Speed(mph)",
    "Carry(yd)",
    "Total(yd)",
    "Apex(yd)",
    "Launch Angle",
    "Launch Direction",
    "Attack Angle",
    "Landing Angle",
    "Back Spin",
    "Side Spin",
    "Spin Rate",
    "Spin Axis",
    "Face Angle",
    "Club Path",
    "Offline(yd)",
  ];

  return (
  <div className={styles.tableWrapper}>
  <div className={styles.scrollWrapper}>
    {/* Sticky header */}
    <div className={styles.stickyHeader}>
      {columns.map((col) => (
        <div key={col} className={styles.stickyCell}>
          {col.replace("(mph)", "").replace("(yd)", "")}
        </div>
      ))}
    </div>

    {/* Scrollable table body */}
    <div
      className={styles.tableContainer}
      ref={(el) => {
        dragRef.current = el;
        containerRef.current = el;
      }}
    >
      {shots.map((shot) => (
        <div key={shot.id} className={styles.row}>
          {columns.map((col) => {
            const key = Object.keys(shot).find((k) => k === col);
            return <div key={col} className={styles.cell}>{key ? shot[key] : ""}</div>;
          })}
        </div>
      ))}
    </div>
  </div>

  {/* Fade overlay on top of everything */}
  <div className={`${styles.tableFade} ${fadeHidden ? styles.hidden : ""}`} />
</div>
);
};

export default Table;