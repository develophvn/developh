import React, {Component} from "react";
import startAnimation from "./animation";
import "../../../static/landing_page.css";
import {Hero} from "./hero";
import {AboutUs} from "./aboutUs";
import {Event} from "./event";
import {Footer} from "./footer";

class LandingPage extends Component {
  componentDidMount = () => {
    startAnimation()
  };

  render() {
    return (
        <div style={{all: 'initial'}}>
          <div className="body">
            <Hero/>
            <AboutUs/>
            <Event/>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default LandingPage;