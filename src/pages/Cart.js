import React from 'react';
import { PropTypes } from 'prop-types';

export default class Cart extends React.Component {
  render() {
    const { cartProductsReduce, cartProducts } = this.props;
    return (
      <div>

        <h5 data-testid="shopping-cart-empty-message">
          {cartProducts.length === 0 && 'Seu carrinho está vazio'}
          {/* <Rating /> */}
        </h5>
        {
          cartProductsReduce.map((product) => (
            <span key={ product.id }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <img src={ product.thumbnail } alt="imagem" />
              <p>{ product.price }</p>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                {' '}
                { cartProducts.filter((p) => (p === product)).length }
              </p>
              <button type="button">Remover</button>
            </span>
          ))
        }
      </div>
    );
  }
}

Cart.propTypes = {
  cartProducts: PropTypes.string.isRequired,
  cartProductsReduce: PropTypes.string.isRequired,
};
