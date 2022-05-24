import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import CartComponent from './components/CartComponent';
import Home from './components/Home';
import Cart from './pages/Cart';
import * as api from './services/api';

export default class App extends React.Component {
  state = {
    categorias: [],
  }

  async componentDidMount() {
    const categorias = await api.getCategories();
    this.setState({ categorias });
  }

  render() {
    const { categorias } = this.state;
    const todasCategorias = categorias.map(
      (categoria) => (
        <button
          type="button"
          key={ categoria.name }
          data-testid="category"
        >
          {categoria.name}
        </button>),
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CartComponent />
            <Home />
            {categorias.length > 0 && todasCategorias}
          </Route>
          <Route exact path="/Cart ">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
