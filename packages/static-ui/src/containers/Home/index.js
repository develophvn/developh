import React, {Component} from "react";
import startAnimation from "./animation";
import "./landing_page.css";
import {Hero} from "./section/hero";
import {AboutUs} from "./section/aboutUs";
import {Event} from "./section/event";
import {Footer} from "./section/footer";

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