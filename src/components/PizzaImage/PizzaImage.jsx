import React from 'react';
import classes from "./PizzaImage.module.css"
import pizza from "../../assets/pizza.jpg"

const PizzaImage = (props) => {
  return (
    <div className={classes.PizzaImage}>
      <img src={pizza} className={PizzaImg}/>
    </div>
  );
}

export default PizzaImage;
