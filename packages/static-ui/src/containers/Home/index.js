import React, {Component} from "react";
import __html from "./landing_page";
import root from "react-shadow";

class LandingPage extends Component {
  render() {
    return (
        <root.div mode="open">
          <div dangerouslySetInnerHTML={{__html: __html}}/>
        </root.div>
    );
  }
}

export default LandingPage;