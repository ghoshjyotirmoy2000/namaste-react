import React from 'react'
import { CDN_MENU_URL } from '../Utils/constant'

const MenuItemCard = (props) => {
  // console.log(props, "////")
  const { name, price, description, imageId, inStock } = props?.menuItemdata?.card?.info;

  return (
    <div className="bg-white rounded-lg shadow-md max-w-sm cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-40 overflow-hidden">
        <img
          src={CDN_MENU_URL + imageId}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{description}</p>
        <p className="text-gray-700 font-medium mb-1">Price: ₹{(price / 100).toFixed(2)}</p>
        <p
          className={`font-semibold ${
            inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;
