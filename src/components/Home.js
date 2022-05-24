import React from 'react';
import Card from './Card';

export default class Home extends React.Component {
  render() {
    const { products, hasSearched } = this.props;
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
    const conteudo = productElement.length > 0 ? productElement : 'Nenhum produto encontrato';

    return (
      <div>
        {products.length === 0 ? showRequestInput : conteudo}
      </div>
    );
  }
}
