import RestuarentCard from "./RestuarentCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  console.log("Component got rendered")
  // State for restaurant list
  const [listOfRestuarents, setListOfRestuarents] = useState([]);
  const [originalRestuarents, setOriginalRestuarents] = useState([]); // Store original data

  // State to track filter status
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  console.log(listOfRestuarents)

  useEffect(() => {
    fetchData();
  }, []);

  // // using async await
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56885444662564&lng=88.51079219374694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const data = await response.json();
  //     const restroList = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  //     setListOfRestuarents(restroList);
  //     setOriginalRestuarents(restroList); // Store original data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // using .then
  const fetchData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56885444662564&lng=88.51079219374694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        const restroList =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setListOfRestuarents(restroList);
        setOriginalRestuarents(restroList); // Store original data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = () => {
    if (isFiltered) {
      // Show all restaurants
      setListOfRestuarents(originalRestuarents);
    } else {
      // Filter restaurants with avg rating > 4
      const filteredRestuarents = originalRestuarents.filter(
        (res) => res.info.avgRating > 4.3
      );
      setListOfRestuarents(filteredRestuarents);
    }

    // Toggle filter state
    setIsFiltered(!isFiltered);
  };

  // Conditional rendering

  return listOfRestuarents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}  //setting the value using value
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // Filter the restuarant cards and update the UI
              // to get the search text we need to get the value of input box
              // and track the value witha a local state variable
              console.log(searchText);
              const filteredRestro = originalRestuarents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
              setListOfRestuarents(filteredRestro)
              setIsFiltered(true);
              setSearchText("")
            }}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarents.map((restuarent) => (
          <RestuarentCard key={restuarent.info.id} resData={restuarent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
