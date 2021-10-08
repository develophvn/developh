import React, {Component} from "react";
import __html from "./static_page";
import startAnimation from "./animation";
import "../../../static/landing_page.css";

class LandingPage extends Component {
  componentDidMount = () => {
    startAnimation()
  };

  render() {
    return (
        <div style={{all: 'initial'}}
             dangerouslySetInnerHTML={{__html}}/>
    );
  }
}

export default LandingPage;