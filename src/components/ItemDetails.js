import React from 'react';
import PropTypes from 'prop-types';

export default class ItemDetails extends React.Component {
  render() {
    let { currentProduct } = this.props;
    if (Object.keys(currentProduct) === 0) {
      currentProduct = JSON.parse(localStorage.getItem('currentProduct'));
    }
    const { title, price, thumbnail } = currentProduct;
    const c = 'currency';
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } width="100px" height="100px" />
        <p>{price ? price.toLocaleString('pt-br', { style: c, currency: 'BRL' }) : ''}</p>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  currentProduct: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
