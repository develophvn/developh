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
    const {hero, aboutUs, event, footer} = this.props.data;
    return (
        <div style={{all: 'initial'}}>
          <div className="body">
            <Hero data={hero} />
            <AboutUs data={aboutUs} />
            <Event data={event}/>
            <Footer data={footer} />
          </div>
        </div>
    );
  }
}

export default LandingPage;