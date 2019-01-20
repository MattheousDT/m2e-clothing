import React, { Component } from 'react';
import Product from "./product.jsx"
import Cart from "./cart.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

class RootContainer extends Component {
  constructor(props) {
    super(props);

    //What is currently in the cart
    this.state = { items: [] };
    // List of products
    this.products = [
      {
        id: 0,
        name: "Leather Jacket",
        category: "Coats & Jackets",
        price: 54.99,
        stock: 6
      },
      {
        id: 1,
        name: "Blue T-shirt",
        category: "T-shirts",
        price: 8,
        stock: 11
      },
      {
        id: 2,
        name: "Black Jeans",
        category: "Jeans",
        price: 32.99,
        stock: 8
      },
      {
        id: 3,
        name: "Brown Shoes",
        category: "Shoes",
        price: 29.99,
        stock: 7
      },
      {
        id: 4,
        name: "Blue Jeans",
        category: "Jeans",
        price: 32.99,
        stock: 2
      },
      {
        id: 5,
        name: "Black Shoes",
        category: "Shoes",
        price: 25,
        stock: 10
      },
      {
        id: 6,
        name: "Trainers",
        category: "Shoes",
        price: 38.99,
        stock: 9
      },
      {
        id: 7,
        name: "Parka Jacket",
        category: "Coats & Jackets",
        price: 49.99,
        stock: 8
      },
      {
        id: 8,
        name: "Bed Slippers",
        category: "Shoes",
        price: 9.99,
        stock: 20
      },
      {
        id: 9,
        name: "Pink T-shirt",
        category: "T-shirts",
        price: 8,
        stock: 5
      },
      {
        id: 10,
        name: "Yellow T-shirt",
        category: "T-shirts",
        price: 8,
        stock: 6
      },
      {
        id: 11,
        name: "Red T-shirt",
        category: "T-shirts",
        price: 8,
        stock: 6
      }
    ];
  }

  //Adding to cart
  handleAddToCart = id => {

    let items = this.state.items;

    //Find the item just clicked
    const index = items.findIndex(e => e.id === id);
    const productItem = this.products.find(e => e.id === id);
    //Only allow the max stock to be added
    if (index !== -1) {
      if (items[index].quantity >= productItem.stock) {

        toast.error("You cannot order more items than there is stock");
      } else {
        items[index].quantity++;
      }
    } else {
      //Handle if the item can't be found
      const listItem = this.products.find(e => e.id === id);
      if (listItem == null) {
        toast.error(`List item not found, id ${id}`);
      }
      //If the item is out of stock
      if (productItem.stock <= 0) {
        toast.error("Sorry, This item is out of stock");
      }
      //Finally, push the item into the cart
      items.push({
        id: listItem.id,
        name: listItem.name,
        quantity: 1,
        price: listItem.price
      });
    }
    this.setState({ items });
  }

  //Removing from cart
  handleRemFromCart = id => {

    let items = this.state.items;
    //Find the item
    const index = items.findIndex(e => e.id === id);
    if (index !== -1) {
      if (items[index].quantity === 1) {
        items.splice(index, 1);
      } else {
        items[index].quantity--;
      }
    } else {
      toast.error(`List item not found, id ${id}`);
    }

    this.setState({ items });
  }

  render() {
    //Render all the products on the page
    const renderedProducts = this.products.map(e => (
      <Product key={e.id} id={e.id} name={e.name} category={e.category} price={e.price} stock={e.stock} handleAddToCart={this.handleAddToCart}/>
    ));
    
    return (
      <div className="container">
      <ToastContainer />
    <div className="py-5 text-center">
    <svg viewBox="0 0 283.31 148.84">
  <path d="M153.3,203.84h25.82l32,63.09,31.7-63.09h25.67V306.55H247.64v-69.4l-29.2,59h-15l-29.35-59v69.4H153.3Z"
    transform="translate(-153.3 -202.82)" />
  <path id="blue-logo" d="M351.66,287.18v19.37H274.49v-16l38-39.18a55.34,55.34,0,0,0,8.14-10c2-3.27,3-6.14,3-8.58a8.81,8.81,0,0,0-3.75-7.56q-3.74-2.72-10.34-2.71a34.34,34.34,0,0,0-14.08,3.37,61.25,61.25,0,0,0-14.53,9.39l-9.1-17.31q20.25-15.1,41.09-15.11a47,47,0,0,1,18.19,3.3,28.54,28.54,0,0,1,12.32,9.24,22.62,22.62,0,0,1,4.4,13.87q0,7.77-5.13,16.14a107.38,107.38,0,0,1-14.53,18l-23.62,23.77Z"
    transform="translate(-153.3 -202.82)" />
  <path d="M356.79,203.84H435v19.22H380v22.31h49.45v19.22H380v22.74h56.64v19.22H356.79Z" transform="translate(-153.3 -202.82)" />
  <path d="M180.68,314.13a19.57,19.57,0,0,0-7-1.25,18.87,18.87,0,0,0-9.59,2.54,19.19,19.19,0,0,0-7,6.89,18.38,18.38,0,0,0,0,18.85,19.19,19.19,0,0,0,7,6.89,18.87,18.87,0,0,0,9.59,2.54,19.15,19.15,0,0,0,12.81-4.86l.79.74a20.34,20.34,0,0,1-13.6,5.19A19.84,19.84,0,0,1,163.58,349a20.47,20.47,0,0,1-7.39-7.28,19.44,19.44,0,0,1,0-19.9,20.23,20.23,0,0,1,7.39-7.28,20,20,0,0,1,10.13-2.68,19.77,19.77,0,0,1,7.31,1.36,20.93,20.93,0,0,1,6.24,3.78l-.74.73A17.85,17.85,0,0,0,180.68,314.13Z"
    transform="translate(-153.3 -202.82)" />
  <path d="M197.64,312h1.13v38.32h17.67v1.13h-18.8Z" transform="translate(-153.3 -202.82)" />
  <path d="M251.34,314.49a20.34,20.34,0,0,1,7.4,7.25,19.44,19.44,0,0,1,0,19.9,20.42,20.42,0,0,1-7.4,7.31,20.29,20.29,0,0,1-20.26,0,20.39,20.39,0,0,1-7.39-7.31,19.44,19.44,0,0,1,0-19.9,20.31,20.31,0,0,1,7.39-7.25,20.48,20.48,0,0,1,20.26,0Zm-19.67,1a19.24,19.24,0,0,0-7,6.86,17.72,17.72,0,0,0-2.6,9.34,18,18,0,0,0,2.6,9.42,19.16,19.16,0,0,0,7,6.89,19.19,19.19,0,0,0,19.08,0,19.11,19.11,0,0,0,7-6.89,18,18,0,0,0,2.6-9.42,17.81,17.81,0,0,0-2.6-9.34,19.19,19.19,0,0,0-7-6.86,19.19,19.19,0,0,0-19.08,0Z"
    transform="translate(-153.3 -202.82)" />
  <path d="M265,312h28.22v1.13H279.71v38.32h-1.13V313.17H265Z" transform="translate(-153.3 -202.82)" />
  <path d="M301.21,312h1.13v19h28.39V312h1.13v39.45h-1.13V332.13H302.34v19.36h-1.13Z" transform="translate(-153.3 -202.82)" />
  <path d="M346.31,312h1.12v39.45h-1.12Z" transform="translate(-153.3 -202.82)" />
  <path d="M391.4,312h1.13v39.45h-1.69L363,313.17v38.32h-1.13V312h1.7l27.82,38.32Z" transform="translate(-153.3 -202.82)" />
  <path d="M436.44,332.13v14.34a20.34,20.34,0,0,1-13.6,5.19A19.84,19.84,0,0,1,412.71,349a20.42,20.42,0,0,1-7.4-7.31,19.5,19.5,0,0,1,0-19.9,20.34,20.34,0,0,1,7.4-7.25,20,20,0,0,1,10.13-2.68,19.81,19.81,0,0,1,7.31,1.36,20.76,20.76,0,0,1,6.23,3.78l-.73.73a17.85,17.85,0,0,0-5.84-3.55,19.61,19.61,0,0,0-7-1.25,18.94,18.94,0,0,0-9.6,2.54,19.24,19.24,0,0,0-7,6.86,18.33,18.33,0,0,0,0,18.82,19.32,19.32,0,0,0,7,6.92,18.76,18.76,0,0,0,9.6,2.57,19.24,19.24,0,0,0,6.71-1.19,18.33,18.33,0,0,0,5.76-3.39V332.13Z"
    transform="translate(-153.3 -202.82)" />
</svg>
    </div>

    <div className="row">
      <div className="col-md-8 order-md-1">
        <div className="row">
          {[renderedProducts]}
        </div>
      </div>
      
      <Cart handleAddToCart={this.handleAddToCart} handleRemFromCart={this.handleRemFromCart} items={this.state.items}/>
      
    </div>

    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">&copy; 2019 M2E Clothing</p>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>
    );
  }
}

export default RootContainer;
