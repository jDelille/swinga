"use client";

import React from "react";
import styles from "./Feed.module.scss";
import Empty from "../empty/Empty";
import { useRouter } from "next/navigation";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
    const router = useRouter();
  const feed = [];

  return (
    <div>
      {feed.length === 0 && (
        <Empty
          title="Nothing yet"
          description="Looks like there's nothing here yet. New posts will appear when you earn badges, complete challenges, and set new records."
          primaryBtnText="Explore Badges"
          secondaryBtnText="Explore Challenges"
          primaryBtnClick={() => router.push("/badges")}
          secondaryBtnClick={() => router.push("/challenges")}
        />
      )}
    </div>
  );
};

export default Feed;
