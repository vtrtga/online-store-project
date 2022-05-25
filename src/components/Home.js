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
          key={ product.title }
          urlProduto={ product.thumbnail }
          precoProduto={ `R$${product.price}` }
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
  products: PropTypes.arrayOf.isRequired,
  hasSearched: PropTypes.bool.isRequired,
};
