import React from 'react';

export const Hero = (
    {
      data: {
        images: {
          bg: {
            front: {
              src,
              srcset
            },
            cover
          }
        }
      }
    }
) => (
    <div id="hero"
        // style={{backgroundImage: cover.map(src => `url(${src})`).join(', ')}}
         style={{backgroundImage: `url(${cover[0]})`}}
         className="hero-section">
      <div className="container-2 w-container">
        <div className="event-main">
          <div className="event-info-hero">
            <div className="event-info-platform">
              <p className="platform">Closes on Nov 23 2021</p>
            </div>
            <h1 className="event-info-title">Design of Things</h1>
            <p className="paragraph-wae">Design of Things not only teaches the mere Product Design tool, but also
              teaches the mindset to form Digital Product and Physical Product.</p>
          </div>
          <div className="divider"></div>
          <div className="event-property-hero">
            <div className="event-props">
              <p className="paragraph-3">Student</p>
              <p className="paragraph-4">10 students</p>
            </div>
            <div className="event-props">
              <p className="paragraph-3">Class Level</p>
              <p className="paragraph-4">Beginner</p>
            </div>
            <div className="event-props">
              <p className="paragraph-3">Class Length</p>
              <p className="paragraph-4">6 weeks</p>
            </div>
          </div>
          <div data-w-id="53d04a60-965b-a20e-1afe-742ec45086a1" className="cta-button1"><a
              data-w-id="8bf4ed2a-9d8b-72ad-0d9c-81c97cb51d73"
              href="https://forms.gle/pTzok9WsndFZDikt7" target="_blank"
              className="front-button1 w-button">Register Now</a>
            <a href="https://forms.gle/pTzok9WsndFZDikt7"
               target="_blank" className="back-button1 w-button">Register Now</a></div>
        </div>
        <img src={src}
             srcSet={
               srcset.map(({on, src}) => `${src} ${on}`).join(', ')
             }
             loading="lazy" data-w-id="11e7e3b5-9f44-105c-37a9-4ae596de7ff5" sizes="(max-width: 991px) 100vw, 1000px"
             alt="" className="orca"/>
      </div>
    </div>
);