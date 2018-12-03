import React from "react";
import { formatPrice } from "../helpers";

class PizzaTotal extends React.Component {
  total = ingredients => {
    return Object.keys(this.props.ingredients).filter(
      ingredientKey => ingredients[ingredientKey].selected
    );
  };

  render() {
    return (
      <div className="score">
        <span className="label">Total</span>
        <span className="value">
          {this.total(this.props.ingredients)}
          {/*Map(this.props.ingredients.cash)}
          {/*reduce({ formatPrice }, 0)*/}
        </span>
      </div>
    );
  }
}
/* TODO: Create the PizzaTotal Component consisting of:
  - A `div` with a class `score`
    - An `span` with class `label`
      Show the text `Total`
    - An `span` with class `value`
      Show the formated Price of the sum of all `selected` ingredients.

      😱😱😱😱😱😱😱😱😱😱😱😱  DON'T PANIC, YET!

      Over ` Object.keys(this.props.ingredients)`:
        1. filter `selected` ingredients
        2. map `cash` property
        3. reduce all that money with `reduce(<reducer function>, 0)`
*/

export default PizzaTotal;
