import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { nomeProduto, urlProduto, precoProduto } = this.props;
    return (
      <div data-testid="product">
        <p>{ nomeProduto }</p>
        <img src={ urlProduto } alt={ nomeProduto } width="100px" height="100px" />
        <p>{ precoProduto }</p>
      </div>
    );
  }
}

Card.propTypes = {
  nomeProduto: PropTypes.string.isRequired,
  urlProduto: PropTypes.string.isRequired,
  precoProduto: PropTypes.string.isRequired,
};
