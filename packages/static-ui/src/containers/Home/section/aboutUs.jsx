import React from 'react';
import FadeInSection from "../../../components/fade-in-section";

const Offer = (
    {
      offer: {
        icon,
        title,
        description
      },
      children
    }
) => (
    <div className="body-wae">
      {children ?? ""}
      <div className="icon-wae"><img
          src={icon}
          loading="lazy" alt/></div>
      <h1 className="title-wae">{title}</h1>
      <p className="paragraph-wae">{description}</p>
    </div>
);

export function AboutUs(
    {
      data: {
        title,
        description,
        offers
      }
    }
) {
  return (
      <div id="about-us" className="body1-section">
        <div className="container w-container">

          <div className="body1">
            <FadeInSection>
              <img src="/images/home/Vector_3.svg" loading="lazy" alt className="image-10"/>
              <h1 className="body-heading">{title}</h1>
            </FadeInSection>
            <FadeInSection>
              <p className="body-paragraph">{description}</p>
            </FadeInSection>
          </div>

          <div className="w-layout-grid grid-wae">
            <FadeInSection>
              <Offer offer={offers[0]}>
                <img src="/images/60cdb3b09041b4439b8e983e_Group_14.svg" loading="lazy" alt="" className="image-4"/>
              </Offer>
            </FadeInSection>

            {offers.slice(1).map((offer) => (
                <FadeInSection>
                  <Offer key={offer.title} offer={offer}/>
                </FadeInSection>
            ))}
          </div>

        </div>
      </div>
  );
}
