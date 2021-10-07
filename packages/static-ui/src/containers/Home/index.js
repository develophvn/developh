import React, {Component} from "react";
import Webflow from "./webflow";
import root from "react-shadow";

class LandingPage extends Component {
    render() {
        return (
            <root.div mode="closed">
                <Webflow/>
            </root.div>
        );
    }
}

export default LandingPage;