import React from "react";

const Topping = (props) => (
    <button class="topping-button" 
    onClick={props.generateChosenTopping}>Press for a New Topping!</button>
);

export default Topping;