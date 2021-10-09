import React from 'react';

function EventNode(
    {
      event: {
        image,
        title,
        date,
        link
      }
    }
) {
  return (
      <div className="event-wae">
        <div className="event-img-group">
          <div className="event-img red-backdrop"></div>
          <div style={{backgroundImage: `url(${image})`}} className="event-img img1">
            <a href={link} className="event-img-link w-inline-block"></a>
          </div>
        </div>
        <div className="event-info"><a href={link} className="event-title">{title}</a>
          <div className="event-date">
            <p className="event-infodate">{date}</p>
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
          <div className="w-layout-grid grid">

            {events.map((event) =>
                <EventNode key={event.title} event={event}/>
            )}

          </div>
        </div>
      </div>
  );
}