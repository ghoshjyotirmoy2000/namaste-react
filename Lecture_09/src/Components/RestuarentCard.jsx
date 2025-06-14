import { CDN_URL } from "../Utils/constant";

const RestuarentCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating , costForTwo } = props.resData.info;
    const { deliveryTime } = props.resData.info.sla;
    return (
      <div className="res-card">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt=""
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} starts</p>
        <p>{costForTwo}</p>
        <p>{deliveryTime} mins</p>
      </div>
    );
  };

  export default RestuarentCard;