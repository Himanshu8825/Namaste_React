import React from 'react';
import { CDN_URL } from '../utils/constants';

const FoodCard = ({ food }) => {
  return (
    <div className="w-[260px] rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white flex flex-col">
      {/* Food Image */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover rounded-t-xl"
          src={`${CDN_URL}${food?.cloudinaryImageId}`}
          alt={food?.name}
        />

        {/* Discount Badge - Styled Like Swiggy */}
        {food?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-0 w-full text-lg bg-gradient-to-t from-black to-transparent text-white font-extrabold px-4 py-2 text-left">
            {food.aggregatedDiscountInfoV3.header || food.aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>

      {/* Food Details - Flex to Maintain Uniform Card Height */}
      <div className="p-4 flex flex-col grow">
        <h1 className="text-lg font-bold text-gray-900 truncate">{food.name}</h1>

        {/* Cuisine Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {food?.cuisines.length > 3 ? (
            <>
              {food.cuisines.slice(-3).map((cuisine, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                  {cuisine}
                </span>
              ))}
              <span className="bg-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">...</span>
            </>
          ) : (
            food?.cuisines.map((cuisine, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                {cuisine}
              </span>
            ))
          )}
        </div>

        {/* Ratings & Delivery Time */}
        <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mt-3">
          <p className="flex items-center gap-1">
            ⭐ {food.avgRating} <span className="text-gray-500">({food.totalRatingsString})</span>
          </p>
          <p className="text-gray-500">{food.sla?.slaString}</p>
        </div>

        {/* Location */}
        <p className="flex items-center pt-2 gap-1 text-gray-700 font-semibold">
          📍 {food?.areaName}
        </p>

        {/* Price and Delivery */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm font-bold text-gray-800">{food.costForTwo}</p>
          {food.isFreeDelivery && <p className="text-xs text-green-600 font-bold animate-pulse">Free Delivery</p>}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
