import React from "react";

const resource = (props) => {
  return (
    <div className={'resource' + props.color}>
            <h4>{props.name}</h4>
            <h5>{props.type}</h5>
            <button onClick={() => window.location.href = props.link}>{props.buttonText}</button>
    </div>
       
  )
}

export default resource;