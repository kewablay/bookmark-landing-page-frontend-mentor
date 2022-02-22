import React from 'react'

function Answer({content}) {
  return (
    <div className="questionTab__answer">
      <p>
        {content}
      </p>
    </div>
  );
}

export default Answer