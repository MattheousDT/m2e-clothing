import React, { Component } from "react";
import CartItem from "./cart-item.jsx";
import { round2dp } from "../utils";
import { toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

//Promo codes
const promoCodes = [{
  code: "example",
  discount: 5
}];

class Cart extends Component {
  constructor(props) {
    super(props);
    //Default: No promo code active
    this.state = { promoCode: null, currentDiscountCode: "" };
  }

  //Applying Promo code
  applyPromoCode = event => {
    event.preventDefault();
    //Find the promo code and add if valid
    const promoCode = promoCodes.find(e => e.code === this.state.currentDiscountCode);
    this.setState({ promoCode });
    //If it's not valid
    if (promoCode == null) {

      toast.error(`${this.state.currentDiscountCode} is not a valid promo code`);
    }
  }
  //Update the current promo code
  updateCurrentDiscountCode = event => {

    this.setState({ currentDiscountCode: event.target.value });
  }

  render() {

    //Render the HTML for cart items
    const renderedCartItems = this.props.items.map(e => (
      <CartItem key={e.id} id={e.id} name={e.name} quantity={e.quantity} price={e.price} handleAddToCart={this.props.handleAddToCart} handleRemFromCart={this.props.handleRemFromCart} />
    ));

    //Calculate the total with and without discounts
    const total = this.props.items.reduce((a, c) => a += c.price * c.quantity, 0);
    const totalAfterDiscount = Math.max(total - (this.state.promoCode == null ? 0 : this.state.promoCode.discount), 0);

    return (
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="grey-text">Your cart</span>
          <span className="badge grey badge-pill">{this.props.items.reduce((a, e) => a += e.quantity, 0)}</span>
        </h4>
        
        <ul className="list-group mb-3">
          {renderedCartItems}
          { this.state.promoCode &&
            (<li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h5 className="my-0">Promo code</h5>
              <small>{this.state.promoCode.code.toUpperCase()}</small>
            </div>
            <h5 className="text-success">-£{this.state.promoCode.discount}</h5>
          </li>)
          }
          <li className="list-group-item d-flex justify-content-between">
            <h4>Total</h4>
            <h4>£{round2dp(totalAfterDiscount)}</h4>
          </li>
        </ul>

        <form className="card p-2" onSubmit={this.applyPromoCode}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code" value={this.state.currentDiscountCode} onChange={this.updateCurrentDiscountCode} />
            <div className="input-group-append">
              <button type="submit" className="btn blue">Redeem</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Cart;
