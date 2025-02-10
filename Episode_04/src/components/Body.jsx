import React, { useState } from 'react';
import FoodCard from './FoodCard';

const Body = () => {
  let foodData = [
    {
      id: 1,
      name: 'Thikana',
      cuisines: ['North Indian', 'Chinese'],
      rating: 4.4,
      ratingCount: 1200,
      deliveryTime: '55-60 min',
      priceForTwo: 250,
      isFreeDelivery: true,
      offer: '50% OFF',
      imageUrl:
        'https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?ga=GA1.2.913803272.1727979668&semt=ais_hybrid',
    },
    {
      id: 2,
      name: 'Burger King',
      cuisines: ['American', 'Fast Food'],
      rating: 4.2,
      ratingCount: 900,
      deliveryTime: '30-40 min',
      priceForTwo: 300,
      isFreeDelivery: false,
      offer: '30% OFF',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/21/07/80/1000_F_221078059_5lMlCvNQ3lGlJAXuX1nuIFoWNTAwjkdf.jpg',
    },
    {
      id: 3,
      name: 'Pizza Palace',
      cuisines: ['Italian', 'Pizza'],
      rating: 4.6,
      ratingCount: 1500,
      deliveryTime: '40-50 min',
      priceForTwo: 400,
      isFreeDelivery: true,
      offer: '40% OFF',
      imageUrl:
        'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=612x612&w=0&k=20&c=v8mdiAa_5NaRYtIscClXe85lLzkx7loSd9_pJWt9G2o=',
    },
    {
      id: 4,
      name: 'Biryani House',
      cuisines: ['Hyderabadi', 'Biryani'],
      rating: 4.8,
      ratingCount: 2000,
      deliveryTime: '50-60 min',
      priceForTwo: 500,
      isFreeDelivery: true,
      offer: '20% OFF',
      imageUrl:
        'https://www.archanaskitchen.com//images/archanaskitchen/Indian_Rice/Hyderabadi_Mutton_Gosht_Biryani_With_Kohinoor_Basmati_Rice-1.jpg',
    },
    {
      id: 5,
      name: 'Ice Cream Factory',
      cuisines: ['Desserts', 'Ice Cream'],
      rating: 4.1,
      ratingCount: 800,
      deliveryTime: '20-30 min',
      priceForTwo: 200,
      isFreeDelivery: false,
      offer: 'Buy 1 Get 1 Free',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/ice-cream-opener-001-preview-6491d9abc6ace.jpg',
    },
    {
      id: 6,
      name: 'Sushi World',
      cuisines: ['Japanese', 'Sushi'],
      rating: 4.5,
      ratingCount: 600,
      deliveryTime: '60-70 min',
      priceForTwo: 700,
      isFreeDelivery: true,
      offer: '10% OFF',
      imageUrl:
        'https://cdn.media.amplience.net/i/japancentre/guide-page-sushi-79-maki-sushi/Maki-sushi-rolls?$poi$&w=700&h=410&sm=c&fmt=auto',
    },
  ];

  const [filteredData, setFilteredData] = useState(foodData);

  const filterDish = () => {
    const filterData = foodData.filter((dish) => dish.rating > 4.2);
    setFilteredData(filterData);
  };

  return (
    <>
      <button
        className="m-6 py-2  px-6 bg-blue-500 rounded-xl cursor-pointer font-medium text-white"
        onClick={filterDish}
        onDoubleClick={() => setFilteredData(foodData)}
      >
        Top Rated
      </button>
      <div className="w-full px-6 grid grid-cols-5 gap-4 mb-6 ">
        {filteredData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </>
  );
};

export default Body;
