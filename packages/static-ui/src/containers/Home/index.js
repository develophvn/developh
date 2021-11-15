import React, {Component} from "react";
import "./landing_page.css";
import {Hero} from "./section/hero";
import {AboutUs} from "./section/aboutUs";
import {Event} from "./section/event";
import {Footer} from "./section/footer";
import {Testimonial} from "./section/testimonial";

class LandingPage extends Component {

  render() {
    const {hero, aboutUs, event, testimonial, footer} = this.props.data;
    return (
        <div style={{all: 'initial'}}>
          <div className="body">
            <Hero data={hero} />
            <AboutUs data={aboutUs} />
            <Event data={event}/>
            <Testimonial data={testimonial}/>
            <Footer data={footer} />
          </div>
        </div>
    );
  }
}

export default LandingPage;