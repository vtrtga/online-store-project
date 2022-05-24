import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="home-search" />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}
