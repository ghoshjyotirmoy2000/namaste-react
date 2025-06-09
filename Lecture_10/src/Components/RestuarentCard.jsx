import { CDN_URL } from "../Utils/constant";

const RestuarentCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = props.resData.info;
  const { deliveryTime } = props.resData.info.sla;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mb-1 truncate">{cuisines.join(", ")}</p>

        <div className="flex items-center text-sm text-yellow-500 font-semibold mb-2">
          <svg
            className="w-4 h-4 mr-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
          </svg>
          <span>{avgRating}</span>
          <span className="text-gray-400 ml-2">•</span>
          <span className="ml-2 text-gray-700">{costForTwo }</span>
        </div>

        <p className="text-gray-500 text-sm">{deliveryTime} mins delivery</p>
      </div>
    </div>
  );
};

// highrt order component

// Contract - input- RestuarentCard, output - RestuarentCard with Newly Added Label

export const withLabelRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-0 left-0 bg-green-900 text-white text-xs font-semibold px-3 py-1 z-10 
                        shadow-lg transform -rotate-3 rounded-br-lg 
                        drop-shadow-[2px_4px_2px_rgba(0,0,0,0.3)]">
          {props.resData?.info?.isOpen ? "OPEN" : "CLOSED"}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestuarentCard;
