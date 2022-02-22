import React from 'react'
import Button from './Button'
import Dots from '../images/bg-dots.svg'

function BrowserCard({image, title, text, btnText}){
    return(
        <div className="browserCards__card">
            <div className="card__head">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="card__bottom">
                <div className="bottom__dots">
                    <img src={Dots} alt="" />
                </div>
                <Button text={btnText} />
            </div>
        </div>
    )
}

export default BrowserCard