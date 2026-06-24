const styleCard = {
  backgroundColor: "grey"
};

const RestaurantCard = (props) => {
  const { resData } = props;
    return(
      <div className="res-card" style={styleCard}>
        <img className="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ resData.info.cloudinaryImageId} alt="Biryani image" />
        <h3>{ resData.info.name }</h3>
        <h3>{ resData.info.cuisines.join(", ") }</h3>
        <h3>{ resData.info.avgRating } Starts</h3>
        {/* <h3>{resData.info.sla.deliveryTime} minutes</h3> */}
        <h3>{resData.info.costForTwo}</h3>
        {/* <h3>{resData.info.aggregatedDiscountInfoV3.header}</h3> */}
        </div>
    );
};

export default RestaurantCard;