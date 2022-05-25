import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Home extends React.Component {
  render() {
    const { products, hasSearched } = this.props;
    const frase = 'Nenhum produto encontrado';
    const showRequestInput = hasSearched ? '' : (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
    let productElement = [];
    if (hasSearched === true) {
      productElement = products.results.map((product) => (
        <Card
          nomeProduto={ product.title }
          key={ product.id }
          urlProduto={ product.thumbnail }
          precoProduto={ product
            .price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
        />
      ));
    }
    const conteudo = productElement.length > 0 ? productElement : frase;

    return (
      <div>
        {products.length === 0 ? showRequestInput : conteudo}
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.shape().isRequired,
  hasSearched: PropTypes.bool.isRequired,
};
