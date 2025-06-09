import React, { useEffect, useState } from "react";
import RestaurantCard, { withLabelRestaurantCard } from "./RestuarentCard"; // keeping your original spelling
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../Utils/useFetchData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RESTAURANT_LIST_API } from "../Utils/constant";

const Body = () => {
  const { data, error, loading } = useFetchData(RESTAURANT_LIST_API);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (data) {
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setOriginalRestaurants(restaurants);
    }
  }, [data]);

  const RestuarentCardWithLabel = withLabelRestaurantCard(RestaurantCard);

  console.log(listOfRestaurants, "listOfRestaurants");

  const handleClick = () => {
    if (isFiltered) {
      setListOfRestaurants(originalRestaurants);
    } else {
      const topRated = originalRestaurants.filter(
        (res) => res.info.avgRating > 4.3
      );
      setListOfRestaurants(topRated);
    }
    setIsFiltered(!isFiltered);
  };

  const handleSearch = () => {
    const filtered = originalRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filtered);
    setIsFiltered(false); // reset filter on search
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-600 mt-20 text-xl font-semibold">
        Looks like you are offline, check your internet connection.
      </h1>
    );

  if (loading) return <Shimmer />;
  if (error)
    return (
      <p className="text-center text-red-600 mt-20 text-lg font-medium">
        Error loading restaurants.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search & Filter controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            onClick={handleSearch}
            className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-md shadow transition">
            Search
          </button>
        </div>

        <button
          onClick={handleClick}
          className="bg-transparent border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white px-4 py-2 rounded-md shadow transition w-full sm:w-auto">
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      {/* Restaurant Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfRestaurants.map((restaurant) => (
          <Link
            className="block"
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}>
            {/* if the restuarent is isNewlyOnboarded then show a lable */}
            
            {restaurant?.info?.isOpen ? (
              <RestuarentCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
