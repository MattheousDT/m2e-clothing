# M2E Clothing
Made with React, Node.js and Rust

# How to install and run

### You don't NEED Rust but it will run much faster with

Things you need:
* Node.js
* NPM (comes with node.js)
* Rust (optional)

## Installing
1. `cd ui`
2. `npm i`
3. `npx webpack-dev-server --config webpack.dev.js`

Now you are running in development mode. It will be slower but will have hot-reloading.

To run in production mode (You will need Rust for this):

1. Install the latest nightly build of Rust
2. `npx webpack --config webpack.prod.js`
3. `cargo run`

You can also start the relevent servers by running `dev.sh` or `prod.sh` in a bash terminal

And that's all

## Promo code = "example"