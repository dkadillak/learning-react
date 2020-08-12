import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>You're burger currently: SUCKS ASS
            put a dag on ingredient on the gee dag on burger ol dag on thing </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};


export default burger;

