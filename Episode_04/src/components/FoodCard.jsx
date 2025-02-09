import React from 'react';

const FoodCard = ({ food }) => {
  console.log(food);

  return (
    <div className="w-[250px] border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 font-sans hover:cursor-pointer">
      {/* Food Image */}
      <div className="relative">
        <img
          className="w-full h-[150px] object-cover"
          src={food.imageUrl}
          alt="food-img"
        />
        {/* Promotion Tag */}
        <div className="absolute top-2 left-2 bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-md">
          {food.offer}
        </div>
      </div>

      {/* Food Details */}
      <div className="p-4">
        <h1 className="text-lg font-bold mb-1">{food.name}</h1>

        {/* Cuisine Badges */}
        <p className="flex flex-wrap gap-2 mb-2">
          {food.cuisines.map((cuisine, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cuisine}
            </span>
          ))}
        </p>

        <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mb-2">
          <p className="flex items-center gap-1">
            ⭐ {food.rating}{' '}
            <span className="text-gray-500">({food.ratingCount})</span>
          </p>
          <p>{food.deliveryTime}</p>
        </div>

        {/* Price and Delivery Info */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold">₹{food.priceForTwo}</p>
          {food.isFreeDelivery ? (
            <p className="text-xs text-green-600 font-bold">Free Delivery</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
