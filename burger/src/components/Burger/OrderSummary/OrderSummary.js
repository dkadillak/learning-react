import React from "react";

import Aux from "../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    let ingredientList = Object.keys(props.ingredients).map((igKey) => {
        return (
        <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
       </li>);
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>delicious burger with the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p> <strong>Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.cancelOrder}>CANCEL</Button>
            <Button type="Success" clicked={props.continueOrder}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;