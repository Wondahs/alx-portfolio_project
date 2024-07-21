import React, { useEffect } from 'react';
import Hero from './Hero';
import AboutUsText from './AboutUsText';
import Team from './Team';
import "../assets/styles/about.css"

function AboutUs({title}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="about-us">
      <Hero />
      <AboutUsText />
      <Team />
    </div>
  );
}

export default AboutUs;
