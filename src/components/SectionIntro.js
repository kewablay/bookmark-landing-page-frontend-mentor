import React from "react";

function SectionIntro({ title, content }) {
  return (
    <div className="section__intro">
      <h3 className="intro__title">{title}</h3>
      <p className="intro__content">{content}</p>
    </div>
  );
}

export default SectionIntro;
