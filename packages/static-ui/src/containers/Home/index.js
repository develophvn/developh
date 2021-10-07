import React, {Component} from "react";
import root from "react-shadow";
import Webflow from "./webflow";
import __html from "./landing_page";
import landingPageAnimation from "./landing_page.animation";

class LandingPage extends Component {
  componentDidMount = () => {
    landingPageAnimation()
  };

  render() {
    return (
        // <root.div id="shadow-dom" mode="open">
        //   <Webflow />
          <div dangerouslySetInnerHTML={{__html}}/>
        // </root.div>
    );
  }
}

export default LandingPage;