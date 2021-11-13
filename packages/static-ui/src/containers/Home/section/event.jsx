import React from 'react';
import * as PropTypes from "prop-types";

function TagItem({title, color}) {
  console.trace(title)
  console.trace(color)
  return (
      <li className="list-item">
        <div className="event-tag" style={{borderColor: color}}><p className="event-tag-content"
                                                                   style={{color: color}}>{title}</p></div>
      </li>
  );
}

TagItem.propTypes = {
  title: PropTypes.any,
  color: PropTypes.any
};

function EventNode(
    {
      event: {
        image,
        title,
        startDate,
        endDate,
        link,
        tags
      }
    }
) {
  console.log(image, title, startDate, endDate, link, tags)
  return (
      <div className="event-wae">
        <div className="columns w-row">
          <div className="column-2 w-col w-col-6">
            <div className="event-img-group">
              <div className="event-img red-backdrop"></div>
              <div style={{backgroundImage: `url(${image})`}} className="event-img img1">
                <a href={link} className="event-img-link w-inline-block"></a>
              </div>
            </div>
          </div>
          <div className="column w-col w-col-6">
            <div className="div-block-3"><a href={link} className="event-title">{title}</a>
              <ul role="list" className="list">
                {tags.map(tag => <TagItem key={tag.title} title={tag.title} color={tag.color}/>)}
              </ul>
              <div className="div-block-2">
                <div className="event-date"><h4 className="heading">Start Date</h4>
                  <p className="paragraph-5">{startDate}</p></div>
                <div><img
                    src="/images/home/Icon_7.svg"
                    loading="lazy" alt="" className="image-8"/></div>
                <div className="event-date"><h4 className="heading">End Date</h4>
                  <p className="paragraph-5">{endDate}</p></div>
              </div>
              <div data-w-id="f9e749c2-a961-eb2e-dcbd-1edd427331f4" className="cta-button-readmore"><a
                  // style="-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);color:rgb(231,90,93);background-color:rgb(255,255,255)"
                  href={link} target="_blank"
                  className="front-button-readmore w-button">Read More</a><a href={link}
                                                                             className="back-button-readmore w-button">Register
                Now</a></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export function Event(
    {
      data: {
        title,
        events
      }
    }
) {
  return (
      <div className="body2-section">
        <div className="container w-container">
          <div className="body2">
            <h1 className="body-heading body2-heading">{title}</h1><img
              src="/images/60ceb17ce3936444cb028ed0_also_for_designers!.svg"
              loading="lazy" alt="" className="image-5"/>
          </div>
          <div className="w-layout-grid grid-4">

            {events.map((event) =>
                <EventNode key={event.title} event={event}/>
            )}

          </div>
        </div>
      </div>
  );
}