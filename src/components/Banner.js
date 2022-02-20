import React from "react";
import Button from "./Button";

function Banner({ image, title, content }) {
  return (
    <div className="banner row flex-md-row-reverse">
      <div className="banner__img col-12 col-md-6 col-lg-6">
        <img className="img-fluid" src={image} alt="" />
        <div className="img__background"></div>
      </div>
      <div className="banner__introText col-12 col-md-6 col-lg-6">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="introText__bottons">
          <Button link={"#"} text={"Get it on Chrome"} />
          <Button link={"#"} text={"Get it on Firefox"} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
