"use client";

import React from "react";
import styles from "./Feed.module.scss";
import { usePosts } from "@/hooks/posts/getPosts";
import Post from "../post/Post";

type FeedProps = {};
const Feed: React.FC<FeedProps> = () => {
  const { posts, loading, error } = usePosts();

  console.log(posts);

  return (
    <div className={styles.feed}>
      {posts.map((post, index) => {
        if (post.details.itemName) return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default Feed;
