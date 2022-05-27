import React from 'react';
import { BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import CartComponent from './components/CartComponent';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
import Cart from './pages/Cart';
import Rating from './components/Rating';
import * as api from './services/api';

export default class App extends React.Component {
  state = {
    categorias: [],
    filterValue: '',
    products: {},
    hasSearched: false,
    currentProduct: {},
    cartProducts: [],
    cartProductsReduce: [],
  }

  async componentDidMount() {
    const categorias = await api.getCategories();
    this.setState({ categorias,
      currentProduct: JSON.parse(localStorage.getItem('currentProduct')) || {} });
  }

  addToCart = (produto) => {
    this.setState((i) => ({
      cartProducts: [...i.cartProducts, produto],
      cartProductsReduce: [...i.cartProducts, produto]
        .filter((value, index, self) => self.indexOf(value) === index),
    }));

    // this.setState({
    //   cartProductsReduce: [...new Set(cartProducts)],
    // });
    // this.setState({
    //   cartProductsReduce: cartProducts.filter((item, index) => (
    //     cartProducts.indexOf(item) === index
    //   )),
    // });
  }

  handleChange = ({ target }) => {
    this.setState({ filterValue: target.value });
  }

  handleFilter = async ({ target }) => {
    const { id } = target;
    const { filterValue } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(id, filterValue);
    this.setState({ products, hasSearched: true });
  }

  // removeProductFromCart = (produto) => {
  //   const { cartProducts } = this.state;

  // }

  setCurrentProduct = (product) => {
    this.setState({ currentProduct: product });
    localStorage.setItem('currentProduct', JSON.stringify(product));
  }

  render() {
    const { categorias, filterValue,
      products, hasSearched, currentProduct, cartProducts,
      cartProductsReduce } = this.state;
    const todasCategorias = categorias.map(
      (categoria) => (
        <div key={ categoria.id } className="divCaregories">
          <button
            className="buttonCategory"
            type="button"
            key={ categoria.name }
            data-testid="category"
            id={ categoria.id }
            onClick={ this.handleFilter }
          >
            {categoria.name}
          </button>
        </div>),
    );
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CartComponent />
            <input
              type="text"
              id="home-search"
              value={ filterValue }
              onChange={ this.handleChange }
              data-testid="query-input"
            />
            <button
              type="button"
              onClick={ this.handleFilter }
              data-testid="query-button"
              className="queryButton"
            >
              Pesquisar
            </button>
            <Home
              addToCart={ this.addToCart }
              products={ products }
              hasSearched={ hasSearched }
              setCurrentProduct={ this.setCurrentProduct }
            />
            {categorias.length > 0 && todasCategorias}
          </Route>
          <Route path="/cart">
            <Cart
              cartProductsReduce={ cartProductsReduce }
              cartProducts={ cartProducts }
            />
          </Route>
          <Route
            path="/item/:id"
            render={ (props) => (
              <div>

                <ItemDetails currentProduct={ currentProduct } />
                <Rating currentProduct={ currentProduct } { ...props } />
              </div>) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
