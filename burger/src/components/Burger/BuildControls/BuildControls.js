import React from "react";
import classes from "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current price is <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( el => (
                <BuildControl 
                label={el.label}
                added={() => props.ingredientAdded(el.type)}
                removed={() => props.ingredientRemoved(el.type)}
                disable={props.disabledButtons[el.type]}
                key={el.label}/>
           ))}
           <button 
            onClick={props.click} 
            className={classes.OrderButton} 
            disabled={props.disable}
            >
               {props.readyToOrder ?  "EDIT ORDER": "ORDER NOW"}
            </button>
        </div>
    );

};

export default buildControls;