import React from 'react';
import __html from "./landing_page";
import landingPageAnimation from "./landing_page.animation";

class Webflow extends React.Component {
    componentDidMount = () => {
        landingPageAnimation()
    };
    render() {
        return (
            <div id="shadow-dom" dangerouslySetInnerHTML={{__html}}/>
        );
    }
}

export default Webflow;