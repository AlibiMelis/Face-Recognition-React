import React, { Component } from "react";
import './InputForm.css';

class InputForm extends Component {
  render() {
    return (
      <div>
        <p className="f3">{"This brain will recognise faces on the images"}</p>
        <div className="center">
          <div className="pa4 br3 shadow-5 center form">
            <input type="text" className="f4 pa2 w-70" onChange={this.props.onInputChange}/>
            <button className="f4 grow w-30 link ph3 pv2 dib white bg-light-purple">
              Detect
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
