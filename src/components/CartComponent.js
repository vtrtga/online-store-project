import React from 'react';
import { Link } from 'react-router-dom';

export default class CartComponent extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart">
          <button
            type="button"
            onClick={ this.sendToCart }
            data-testid="shopping-cart-button"
          >
            imagine um icone de carrinho aq
          </button>
        </Link>
      </div>
    );
  }
}
