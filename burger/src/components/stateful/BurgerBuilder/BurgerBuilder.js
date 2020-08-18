import React, {Component} from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1,
    bacon: .5
}

class BurgerBuilder extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                meat: 0,
                cheese: 0
            },
            totalPrice: 4,
            readyToOrder: false
        }
    }

    orderSummaryHandler = () => {
        console.log("Changing readyToOrder state");

        this.setState((prevState) => {
            return {
                readyToOrder: !prevState.readyToOrder
            }
        });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = oldCount + 1;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: newIngredients, totalPrice: newPrice});

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0){ return; }
        else {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = oldCount - 1;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({ingredients: newIngredients, totalPrice: newPrice});
        }

    }

    render() {
        const disabledButtons = {
            ...this.state.ingredients
        };
        for (let el in disabledButtons){
            disabledButtons[el] = disabledButtons[el] <=0;
        }

        const orderSummary = (
            this.state.readyToOrder ? 
            <OrderSummary ingredients={this.state.ingredients}/> : 
            <p>Order Summary will display here when you're ready to submit your order!</p>
        );
        return (
            <Aux>
                <Modal>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabledButtons={disabledButtons}
                price={this.state.totalPrice}
                disable={Object.values(this.state.ingredients).reduce((a,b) => a+b,0) === 0}
                click={this.orderSummaryHandler}
                readyToOrder={this.state.readyToOrder}
                />
            </Aux>
        );
    }

}


export default BurgerBuilder;