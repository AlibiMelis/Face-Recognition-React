import React, { Component } from "react";
import './Logo.css';
import brain from './brain.png';
import Tilt from "react-parallax-tilt";

class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{max: 25}} style={{ height: "150px", width: "150px" }}>
          <div className="pa3">
            <img src={brain} alt="logo"/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
