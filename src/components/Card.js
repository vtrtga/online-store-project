import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div>
        <p>nomeProduto</p>
        <img src="url" alt="imagem do produto" />
        <p>Preço</p>
      </div>
    );
  }
}
