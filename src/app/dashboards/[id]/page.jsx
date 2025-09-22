
import React from "react";

const Page = async ({ params }) => {

  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <div className="border p-4">
      <h2>Post Detayı: {JSON.stringify(data,null,2)}</h2>
    </div>
  );
};

export default Page;
