"use client";

import React from "react";
import Empty from "../empty/Empty";
import { useRouter } from "next/navigation";

type StatsProps = {};
const Stats: React.FC<StatsProps> = () => {
  const router = useRouter();
  const stats = [];
  return (
    <div>
      {stats.length === 0 && (
        <Empty
          title="Nothing yet"
          description="Looks like there's no stats yet. Stats recorded from uploaded sessions will be shown here."
          primaryBtnText="Upload session"
          primaryBtnClick={() => router.push("/upload")}
        />
      )}
    </div>
  );
};

export default Stats;
