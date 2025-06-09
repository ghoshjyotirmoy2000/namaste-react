import React from "react";

const Shimmer = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-64 bg-gray-300 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
