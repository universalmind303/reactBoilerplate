import React, {Component} from 'react';
import Subcomponent from './Subcomponent.jsx';
export default () => (
  <div className='container'>
    <Subcomponent />
    <div className='app'>
      <div className='nested'>nested object</div> 
      APP 
    </div>
    <button className="btn btn-primary">Test button</button>
  </div>
)


