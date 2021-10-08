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
            <Hero images={hero.images} />
            <AboutUs images={aboutUs.images} />
            <Event images={event.images}/>
            <Footer images={footer.images} />
          </div>
        </div>
    );
  }
}

export default LandingPage;