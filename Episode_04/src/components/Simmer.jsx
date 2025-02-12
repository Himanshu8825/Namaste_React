import React from 'react';

const Shimmer = () => {
  return (
    <div className="w-full px-6 grid grid-cols-5 gap-4 mb-6">
      {Array(20)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-40 bg-gray-200 animate-pulse rounded-xl"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
