import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuSimmer from './MenuSimmer';

const Restaurant = () => {
  const [cart, setCart] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menu, setMenu] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const { resId } = useParams();
  console.log(resId);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const data = await res.json();
      setRestaurantInfo(data?.data?.cards[2]?.card?.card?.info);

      const menuData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.categories[0]?.itemCards || [];

      setMenu(menuData);
      console.log('Menu:', menuData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantInfo) {
    return <MenuSimmer />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Restaurant Information */}
      <h1 className="text-4xl font-bold text-gray-800">
        {restaurantInfo.name}
      </h1>
      <p className="text-gray-600 text-lg mt-1">
        {restaurantInfo.cuisines.join(', ')}
      </p>

      <div className="flex justify-between mt-4 text-gray-700">
        <span className="flex items-center">
          ⭐ {restaurantInfo.avgRating} Rating
        </span>
        <span>
          🕒 {restaurantInfo.sla.minDeliveryTime} -{' '}
          {restaurantInfo.sla.maxDeliveryTime} min
        </span>
        <span>💰 {restaurantInfo.costForTwoMessage}</span>
      </div>

      {/* Address and Contact Info */}
      <p className="text-gray-500 mt-3">
        📍 {restaurantInfo.areaName}, {restaurantInfo.city}
      </p>
      {restaurantInfo.contactNumber && (
        <p className="text-gray-500">📞 {restaurantInfo.contactNumber}</p>
      )}

      {/* Menu Section */}
      <h2 className="text-3xl font-semibold mt-6 border-b pb-2">Menu</h2>
      <div className="mt-4">
        {menu.length > 0 ? (
          menu.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* Left Side: Image and Name */}
              <div className="flex items-center">
                {item?.card?.info?.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${item.card.info.imageId}`}
                    alt={item?.card?.info?.name}
                    className="w-40 h-40 rounded-lg mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item?.card?.info?.description}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      item?.card?.info?.isVeg
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {item?.card?.info?.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                  </p>
                </div>
              </div>

              {/* Right Side: Price and Add to Cart */}
              <div className="flex items-center">
                <span className="text-green-600 font-semibold mr-4">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
                <button
                  onClick={() => addToCart(item?.card?.info)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all"
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No menu items available</p>
        )}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between">
          <span className="font-semibold">{cart.length} items in cart</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
