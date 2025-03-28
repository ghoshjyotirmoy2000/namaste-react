import RestuarentCard from "./RestuarentCard";
import resList from "../utils/mockData";
import React, { useState } from "react";

const Body = () => {

  // state variable
  const [ listOfRestuatrents, setListOfRestuatrent ] = useState(resList);
  const demoState =  useState(65)
  console.log(demoState[0])
  console.log(demoState[1])

  const handleClick = () => {

    // Filter logic here
    const filteredRestuarents = listOfRestuatrents.filter((res) => res.info.avgRating > 4); 
    setListOfRestuatrent(filteredRestuarents);
  };
  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restuarents
        </button>
      </div>
      <div className="res-container">
        {listOfRestuatrents.map((restuarent) => {
          return (
            <RestuarentCard key={restuarent.info.id} resData={restuarent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
