import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Search from './Search';
import Shimmer from './Simmer';

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  const filterDish = () => {
    if (filteredData.length === 0) return;
    const filterData = allData.filter((dish) => dish.info.avgRating > 4.2);
    setFilteredData(filterData);
  };

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
        );
        const data = await response.json();
        const restaurants =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setAllData(restaurants);
        setFilteredData(restaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchedData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <button
          className="m-6 py-2  px-6 bg-blue-500 rounded-xl cursor-pointer font-medium text-white"
          onClick={filterDish}
          onDoubleClick={() => setFilteredData(allData)}
        >
          Top Rated
        </button>

        <div className="">
          <Search allData={allData} setFilteredData={setFilteredData} />
        </div>
      </div>
      {filteredData.length === 0 ? (
        <Shimmer  />
      ) : (
        <div className="w-full px-6 grid grid-cols-5 gap-4 mb-6 ">
          {filteredData.map((food) => (
            <FoodCard key={food.info.id} food={food.info} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
