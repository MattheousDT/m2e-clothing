import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  //HTML and properties for each item in the products listing
  render() {
    return (
      <div className="col-sm-6 col-lg-4 pb-3">
        <div className="card">
          {/* <img src="" className="card-img-top" />   Product image can be added if needed  */}
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <h5 className="card-subtitle">£{this.props.price}</h5>
            <p className="card-text">{this.props.category}</p>
            <p className="card-text">{this.props.stock} in stock</p>
            <button onClick={e => this.props.handleAddToCart(this.props.id)} className="addCartBtn btn blue">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;