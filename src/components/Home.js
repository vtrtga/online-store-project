import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

export default class Home extends React.Component {
  render() {
    const { products, hasSearched, setCurrentProduct } = this.props;
    const frase = 'Nenhum produto encontrado';
    const showRequestInput = hasSearched ? '' : (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);
    let productElement = [];
    if (hasSearched === true) {
      productElement = products.results.map((product) => (
        <Link
          to={ `item/${product.id}` }
          key={ product.id }
          data-testid="product-detail-link"
          onClick={ () => setCurrentProduct(product) }
        >
          <Card
            nomeProduto={ product.title }
            urlProduto={ product.thumbnail }
            precoProduto={ product
              .price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          />
        </Link>
      ));
    }
    const conteudo = productElement.length > 0 ? productElement : frase;

    return (
      <div>
        {Object.keys(products).length === 0 ? showRequestInput : conteudo}
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.shape().isRequired,
  hasSearched: PropTypes.bool.isRequired,
  setCurrentProduct: PropTypes.func.isRequired,
};
