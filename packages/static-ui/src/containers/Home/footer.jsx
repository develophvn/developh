import React from 'react';

const ids = [
  'ce88fbf7-ebe5-4495-2da6-9201720ddc03',
  '55152767-8779-0ad3-3119-09fc92ff8360'
]

function zip(rows) {
  return rows[0].map((_, c) => rows.map(row => row[c]));
}

function FooterInfo(
    {
      info: {
        description,
        button,
        link
      },
      id
    }
) {
  return (
      <div className="footer-info">
        <p className="paragraph-wae footer-paragraph">{description}</p>
        <div className="cta-button2">
          <a data-w-id={id}
             href={link} target="_blank"
             className="front-button2 w-button">{button}</a>
          <a href="#"
             className="back-button2 w-button">{button}</a></div>
      </div>
  );
}

export function Footer(
    {
      data: {title, info}
    }
) {
  return (
      <div id="footer" className="footer-section">
        <div className="container w-container">
          <h1 className="body-heading body2-heading body3-heading">{title}</h1>
          <div className="w-layout-grid grid-2">
            {zip([info, ids]).map(([i, id]) =>
                <FooterInfo key={id} info={i} id={id}/>
            )}
          </div>
          <p className="paragraph-2">© 2021 Developh. All rights reserved.</p>
        </div>
      </div>
  );
}