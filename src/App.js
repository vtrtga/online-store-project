import React from 'react';
import { BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import CartComponent from './components/CartComponent';
import Home from './components/Home';
import Cart from './pages/Cart';

export default class App extends React.Component {
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
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
