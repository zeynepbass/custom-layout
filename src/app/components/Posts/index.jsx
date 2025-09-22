"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Posts = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="border p-2 my-2">
          <h2
            className="font-bold cursor-pointer"
            onClick={() => router.push(`/dashboards/${post.id}`)}
          >
            {post.title}
          </h2>
        
        </div>
      ))}
    </div>
  );
};

export default Posts;
