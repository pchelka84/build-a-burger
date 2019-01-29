import React, { Component } from "react";
import Aux from "../../hoc/Auxiliaru";
import Burger from "../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    // base price
    totalPrice: 4
  };

  addIngredientHandler = type => {
    // adding one ingredient of type
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    // updating the price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    //updating the state
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = type => {
    // adding one ingredient of type
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    // updating the price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    //updating the state
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      // disabledInfo[key] <= 0 is going to be true or false
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    // {salad: true, meat: false, ...}
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
