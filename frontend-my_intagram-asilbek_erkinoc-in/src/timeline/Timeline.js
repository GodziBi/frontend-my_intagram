import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "astrum",
      postImage:
        "https://astrum.uz/images/astrum_staff.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "jamshid",
      postImage:
        "https://avatars.mds.yandex.net/get-altay/4289674/2a0000017c2ff4b6e483530b73dc55f79cf0/orig",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "malika",
      postImage:
        "https://astrum.uz/images/layout/12.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "sh.mirziyoyev",
      postImage:
        "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/9b713fa4ce092ee6e3699ed0f42e6fe4.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
