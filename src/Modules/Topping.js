import React from "react";

const Topping = () => (
    <form>
        <input type="radio" id="yes" name="topping_answer" value="YES"></input>
        <label for="YES">YES</label><br></br>
        <input type="radio" id="no" name="topping_answer" value="NO"></input>
        <label for="NO">NO</label><br></br>
    </form>
);

export default Topping;