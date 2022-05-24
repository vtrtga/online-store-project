import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { nomeProduto, urlProduto, precoProduto } = this.props;
    return (
      <div data-testid="product">
        <p>{ nomeProduto }</p>
        <img src={ urlProduto } alt={ nomeProduto } />
        <p>{ precoProduto }</p>
      </div>
    );
  }
}
