import React from 'react'
import Button from './Button'

function Banner({title, content, image}) {
  return (
    <div className="banner row">
      <div className="banner__img col-12 col-md-6 col-lg-6 d-flex justify-content-center">
        <img className="img-fluid" src={image} alt="" />
        <div className="img__bg"></div>
      </div>
      <div className="banner__introText col-12 col-md-6 col-lg-6">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="introText__buttons" id="btn">
          <Button link={"#"} text={"More Info"} />
        </div>
      </div>
    </div>
  );
}

export default Banner