import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from "./index.scss";

class ApplicationTemplate extends Component {
  render () {
    return (
      <div className="vlad">
        <a className={styles.link} onClick={ () => console.log(123) } href="javascript://">Main Templates!!</a>
        <Link to="/welcome">go to welcome</Link>
        { this.props.children }
      </div>
    )
  }
}

module.exports = ApplicationTemplate;
