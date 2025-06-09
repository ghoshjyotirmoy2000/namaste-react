import React, { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";
import useFetchData from "../Utils/useFetchData";

const RestuarantMenu = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(MENU_API(id));
  const [menuItemList, setMenuItemList] = useState([]);
  const [originalMenuItemList, setOriginalMenuItemList] = useState([]);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (data) {
      const resInfo = data?.data?.cards[2]?.card?.card?.info;
      const items =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || [];
      console.log(data , "data")
      setResInfo(resInfo);
      setMenuItemList(items);
      setOriginalMenuItemList(items);
    }
  }, [data]);

  if (loading) return <Shimmer />;
  if (error)
    return (
      <p className="text-red-600 text-center mt-10">
        Error loading restaurant menu.
      </p>
    );

  const {
    name,
    city,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = resInfo || {};

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Restaurant Header Info */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
        <h2 className="text-xl text-gray-700 mb-1">
          {city}, {areaName}
        </h2>
        <p className="text-gray-600 mb-1">{costForTwoMessage}</p>
        <div className="flex items-center space-x-4 text-gray-700">
          <p>
            ⭐ Avg rating: <span className="font-semibold">{avgRating}</span>
          </p>
          <p>
            Total ratings:{" "}
            <span className="font-semibold">{totalRatingsString}</span>
          </p>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItemList.map((menuItem, index) => {
          console.log(menuItem, "?????");
          return <MenuItemCard key={index} menuItemdata={menuItem} />;
        })}
      </div>
    </div>
  );
};

export default RestuarantMenu;
