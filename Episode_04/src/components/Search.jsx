import React, { useState } from 'react';

const Search = ({ allData, setFilteredData }) => {
  const [searchQuary, setSearchQuary] = useState('');
  console.log(searchQuary);

  const handleSearch = (query) => {
    setSearchQuary(query);

    if (query.length === 0) {
      setFilteredData(allData);
    } else {
      const searchResult = allData.filter((dish) =>
        dish.info.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(searchResult);
    }

    console.log(searchQuary);
  };

  return (
    <div className="flex items-center gap-4 px-12 w-full ">
      <input
        value={searchQuary}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search for food or restaurants..."
        className="w-full  max-w-lg px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
};

export default Search;
