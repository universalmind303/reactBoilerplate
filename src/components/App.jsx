import React, {Component} from 'react';
import styles from '../styles/app.css'
import Subcomponent from './Subcomponent.jsx'

export default class App extends Component {

  render() {
    return (
      <div className= {`container ${styles.test}`}>
      <Subcomponent />
      <button className="btn btn-primary">Test button</button>
      </div>
    )
  }
}

