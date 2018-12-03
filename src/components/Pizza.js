import React from "react";
import PizzaHeader from "./PizzaHeader";
import PizzaIngredients from "./PizzaIngredients";
import PizzaTotal from "./PizzaTotal";

class Pizza extends React.Component {
  state = {
    ingredients: {
      dough: {
        id: 1,
        name: "Dough",
        cash: 500,
        selected: true
      },
      pinneaple: {
        id: 2,
        name: "Pinneaple",
        cash: 150,
        selected: false
      },
      mozzarella: {
        id: 3,
        name: "Mozzarella",
        cash: 200,
        selected: false
      },
      pepperoni: {
        id: 4,
        name: "Pepperoni",
        cash: 125,
        selected: false
      },
      ham: {
        id: 5,
        name: "Ham",
        cash: 150,
        selected: false
      },
      tuna: {
        id: 6,
        name: "Tuna",
        cash: 100,
        selected: false
      }
    }
  };

  ingredientSelector = ingredientKey => {
    // 1. Hacer una copia del `estado`
    const newIngredients = { ...this.state.ingredients };
    // 2. Añadir newIngredient a newIngredients
    newIngredients[ingredientKey].selected = !newIngredients[ingredientKey]
      .selected;
    // 3. Añadir newIngredients como el nuevo `estado`
    this.setState({ ingredients: newIngredients });
  };

  render() {
    return (
      <div className="content">
        <PizzaHeader />
        <PizzaIngredients
          ingredients={this.state.ingredients}
          ingredientSelector={this.ingredientSelector}
        />
        <PizzaTotal ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Pizza;

/* TODO: Create the Pizza Component consisting of:
  - A `div` with a class `content`
    - A `PizzaHeader` component
    - A `PizzaIngredients` component
    - A `PizzaTotal` component
  - You need 👇 code to set the initial state
    ingredients: {
      dough: {
        id: 1,
        name: "Dough",
        cash: 500,
        selected: true
      },
      pinneaple: {
        id: 2,
        name: "Pinneaple",
        cash: 150,
        selected: false
      },
      mozzarella: {
        id: 3,
        name: "Mozzarella",
        cash: 200,
        selected: false
      },
      pepperoni: {
        id: 4,
        name: "Pepperoni",
        cash: 125,
        selected: false
      },
      ham: {
        id: 5,
        name: "Ham",
        cash: 150,
        selected: false
      },
      tuna: {
        id: 6,
        name: "Tuna",
        cash: 100,
        selected: false
      }
    }
*/
