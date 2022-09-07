import React from "react";
import "./card.css";

const Card = (props) => {
  //   console.log(props);
  const classes = "card " + props.className;
  //   console.log(classes);

  return <div className={classes}>{props.children}</div>;
};

export default Card;
