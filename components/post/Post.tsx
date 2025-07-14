import React from "react";
import styles from "./Post.module.scss";
import { Post as PostType } from "@/types/post";

type PostProps = {
  post: PostType;
};
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <p>{post.details.itemName}</p>
    </div>
  );
};

export default Post;
