import React, { Component } from "react";
import { round2dp } from "../utils";

//HTML and properties for each item in the cart
class CartItem extends Component {
  render() {
    return (
      <li className="list-group-item lh-condensed">
        <div className="d-flex justify-content-between">
          <h5 className="my-0">{this.props.name}</h5>
          <h5 className="text-muted">£{round2dp(this.props.price * this.props.quantity)}</h5>
        </div>
        
        <h6 className="text-muted">Quantity: {this.props.quantity}</h6>
        
        <div className="btn-group mt-1" role="group" aria-label="Basic example">
          <button onClick={e => this.props.handleRemFromCart(this.props.id)} type="button" className="btn btn-sm grey px-3">-</button>
          <button onClick={e => this.props.handleAddToCart(this.props.id)} type="button" className="btn btn-sm blue px-3">+</button>
        </div>
      </li>
    );
  }
}

export default CartItem;
