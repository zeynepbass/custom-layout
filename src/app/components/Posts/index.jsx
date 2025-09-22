
import React from "react";

const Posts = ({ data }) => {
  return (
    <div>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} className="border p-2 my-2">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
