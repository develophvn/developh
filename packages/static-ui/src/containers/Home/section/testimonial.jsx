import React from 'react';

function PersonalStatement(
    {
      testimonial: {
        avatar,
        name,
        position,
        color,
        statement
      }
    }
) {
  return (
      <div>
        <p className="paragraph-7">{statement}</p>
        <div className="div-block-4"><img
            src={avatar} loading="lazy"
            width="49" alt={name} className="image-9"/>
          <div className="div-block-5">
            <p className="paragraph-8">{name}</p>
            <div className="text-block" style={{color: color}}>{position}</div>
          </div>
        </div>
      </div>
  );
}

export function Testimonial(
    {
      data: {
        title,
        testimonials
      }
    }
) {
  return (
      <div className="body2-section">
        <div className="container w-container">

          <div className="body2"><h1 className="body-heading body2-heading">{title}</h1></div>
          <div className="w-layout-grid grid-5">

            {testimonials.map(testimonial => <PersonalStatement key={testimonial.name} testimonial={testimonial}/>)}

          </div>

        </div>
      </div>
  );
}
