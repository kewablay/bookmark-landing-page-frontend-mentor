import React from 'react'

function Button({link, text}){
    return (
      <a className="custom-button" href={link}>
        {text}
      </a>
    );
}

export default Button