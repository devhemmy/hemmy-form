import React, { Component } from 'react';
import Form from "./Form/Form";
import './App.css';

class App extends Component {
  state = {
    active : false
  }

  clickShow = ()=> {
    this.setState({
      active : true
    })
  }

  clickHide = ()=> {
    this.setState({
      active : false
    })
  }


  render() {
    return (
      <div className="app">
        <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class='title'>Ibrahem.Form</div>
      </div>
        <div className="back">
          <div className="button_base b07_3d_double_roll" onClick={this.clickShow}>
              <div>Contact Us</div>
              <div>Click Me</div>
              <div>Contact Us</div>
              <div>Click Me</div>
          </div>
        </div>
        { this.state.active && <Form hide={this.clickHide} /> }

      </div>
    );
  }
}

export default App;
