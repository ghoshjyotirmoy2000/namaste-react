import React from 'react'
import { CDN_MENU_URL } from '../Utils/constant'

const MenuItemCard = (props) => {

    const{name, price, description , imageId , inStock} = (props?.menuItemdata?.card?.info)
    // console.log(props, ">>>>")
    
  return (
    <div className="menu-card">
      <div className='title'>
        {/* <h1>{titile}</h1> */}
      </div>
        <img
          src={CDN_MENU_URL+imageId}
          alt=""
        />
        <h3>{name}</h3>
        <p>Description : {description}</p>
        <p>Price : {price/100} starts</p>
        <p>In Stock : {inStock}</p>
      </div>

  )
}

export default MenuItemCard