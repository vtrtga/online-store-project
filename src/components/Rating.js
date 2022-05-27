import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  state = {
    emailField: '',
    message: '',
    rating: '',
    previousRatings: [],
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const ratings = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({ previousRatings: ratings });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { emailField, message, rating, previousRatings } = this.state;
    const { currentProduct } = this.props;
    const { id } = currentProduct;
    const newRating = { email: emailField, message, rating };
    localStorage.setItem(id, JSON.stringify([...previousRatings, newRating]));
    this.setState({ previousRatings: JSON.parse(localStorage.getItem(id)) });
  }

  render() {
    const { emailField, message, previousRatings } = this.state;
    const ratingValue = ['1', '2', '3', '4', '5'];
    const radios = (
      <div>
        {ratingValue.map((radio, index) => (
          <input
            type="radio"
            name="rating"
            value={ radio }
            data-testid={ `${radio}-rating` }
            key={ index }
            onChange={ this.handleChange }
          />
        ))}
      </div>
    );
    const previousRatingsElements = previousRatings.map((rating) => (
      <div key={ rating.rating }>
        <p>{rating.email}</p>
        <p>{rating.message}</p>
        <p>{rating.rating}</p>
      </div>
    ));

    return (
      <div>
        <div>
          <input
            type="email"
            value={ emailField }
            onChange={ this.handleChange }
            name="emailField"
            data-testid="product-detail-email"
            placeholder="E-mail"
          />
          <input
            type="text"
            value={ message }
            onChange={ this.handleChange }
            name="message"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
          />
          {radios}
          <button
            type="button"
            onClick={ this.handleSubmit }
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </div>
        <div className="ratingsAnteriores">
          {previousRatings.length > 0 && previousRatingsElements}
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  match: PropTypes.func.isRequired,
  currentProduct: PropTypes.string.isRequired,
};
