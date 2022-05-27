import React from 'react';
// import Rating from '../components/Rating';

export default class Cart extends React.Component {
  state = {
    cartItems: [],
  }

  render() {
    const { cartItems } = this.state;
    return (
      <h5 data-testid="shopping-cart-empty-message">
        {cartItems.length === 0 && 'Seu carrinho está vazio'}
        {/* <Rating /> */}
      </h5>
    );
  }
}
