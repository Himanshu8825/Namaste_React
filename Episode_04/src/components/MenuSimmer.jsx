import React from 'react';

const MenuSimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg animate-pulse">
      {/* Restaurant Info Shimmer */}
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      <div className="flex justify-between mt-4">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-28"></div>
        <div className="h-4 bg-gray-300 rounded w-24"></div>
      </div>

      {/* Address Shimmer */}
      <div className="h-4 bg-gray-300 rounded w-full mt-3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>

      {/* Menu Section Shimmer */}
      <div className="h-6 bg-gray-300 rounded w-1/4 mt-6 mb-2"></div>
      <div className="space-y-4 mt-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            {/* Left Side: Image and Text */}
            <div className="flex items-center">
              <div className="w-40 h-40 bg-gray-300 rounded-lg mr-4"></div>
              <div>
                <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-48 mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </div>
            </div>

            {/* Right Side: Price and Button */}
            <div className="flex items-center">
              <div className="h-4 bg-gray-300 rounded w-10 mr-4"></div>
              <div className="h-10 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSimmer;
