import React, { Component } from 'react';

class ApplicationTemplate extends Component {
  render () {
    return (
      <div className="vlad">
        <a onClick={ () => console.log(123) } href="javascript://">Main Templates!!</a>
        { this.props.children }
      </div>
    )
  }
}

module.exports = ApplicationTemplate;
