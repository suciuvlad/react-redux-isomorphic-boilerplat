import React, { Component } from 'react';
import styles from "./index.scss";

class Welcome extends Component {
  render () {

    return (
      <div>
        <div className={styles.heading}>Welcome Page</div>
      </div>
    )
  }
}


Welcome.need = [
];

module.exports = Welcome;
