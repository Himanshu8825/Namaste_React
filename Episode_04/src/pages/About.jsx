import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">About Swiggy</h1>
        <p className="text-lg text-center mb-8">
          Swiggy is India’s leading online food ordering and delivery platform,
          providing fast and hassle-free food delivery from restaurants near you.
        </p>

        {/* Section 1: Our Story */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2014, Swiggy started with a simple mission: to make ordering
            food as effortless as possible. Today, we have expanded our reach
            across multiple cities, delivering from thousands of restaurants.
          </p>
        </div>

        {/* Section 2: Why Choose Swiggy */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Swiggy?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Lightning-fast delivery</li>
            <li>Wide range of restaurants and cuisines</li>
            <li>Live order tracking</li>
            <li>No minimum order conditions</li>
          </ul>
        </div>

        {/* Section 3: Our Impact */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-gray-600">
            With millions of happy customers and thousands of delivery partners,
            Swiggy is revolutionizing food delivery in India. Our commitment to
            innovation and customer satisfaction keeps us ahead of the game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
