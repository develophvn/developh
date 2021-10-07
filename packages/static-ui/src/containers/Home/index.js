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
          <html
              style={{
                all: 'initial'
              }}
              data-wf-page="60cacdc34d2a0e6df119b3b2"
              dangerouslySetInnerHTML={{__html}}
          />
        // </root.div>
    );
  }
}

export default LandingPage;