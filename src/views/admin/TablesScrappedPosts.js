import React from "react";

// components


import CardTableScrappedPosts from "components/Cards/CardTableScrappedPosts.js";
export default function TablesScrappedPosts() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
       
        <div className="w-full mb-12 px-4">
          <CardTableScrappedPosts  />
        </div>
      </div>
    </>
  );
}
