import React from 'react';
import __html from "./landing_page";

import "./reset-style.css"
import "./landing_page.css";

import "jquery/dist/jquery.min.js";
import landingPageAnimation from "./landing_page.animation";


class Webflow extends React.Component {

    componentDidMount() {
        landingPageAnimation()
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html}}/>
        );
    }
}

export default Webflow;