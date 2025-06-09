import React, { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItemList, setMenuItemList] = useState([]);
  const [originalMenuItemList, setOriginalMenuItemList] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      MENU_API + id
    )
      .then((response) => response.json())
      .then((data) => {
        setResInfo(data?.data?.cards[2]?.card?.card?.info);
        setMenuItemList(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards || []

        );
        setOriginalMenuItemList(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards || []
        );
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  if(resInfo === null) return <Shimmer/>

  const {name, city, areaName, costForTwoMessage, avgRating , totalRatingsString} = resInfo
  console.log(originalMenuItemList)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{city} {areaName}</h2>
      <p>Price : {costForTwoMessage}</p>
      <p>Avg rating : {avgRating}</p>
      <p>Total ratings :{totalRatingsString}</p>
      <div className="menu-container">
        {menuItemList.map((menuItem, index) => (
          <MenuItemCard key={index} menuItemdata={menuItem} />
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
