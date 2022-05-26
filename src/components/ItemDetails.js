import React from 'react';
import PropTypes from 'prop-types';

export default class ItemDetails extends React.Component {
  render() {
    console.log(this.props);
    const { currentProduct } = this.props;
    const { title, price, thumbnail } = currentProduct;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } width="100px" height="100px" />
        <p>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
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