import React from "react";
import "./BannerName.css";
function BannerName({ name, discount, more }) {
  const currency = "₹";
  return (
    <div className="bannerContainer">
      <div className="bannerContent">
        <h1>Delight Delivered: Your Culinary Adventure Awaits!</h1>
        <p style={{ color: "black" }}>
  Get free discount for every <span>{`${currency}${discount}`}</span>{" "}
  purchase
</p>

        <a href={more}>Learn More</a>
      </div>
    </div>
  );
}

export default BannerName;
