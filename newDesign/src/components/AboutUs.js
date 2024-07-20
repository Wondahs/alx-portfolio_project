import React, { useEffect } from 'react';
import Hero from './Hero';
import AboutUsText from './AboutUsText';
import Team from './Team'; // Import Team component if included
import "../assets/styles/about.css"

function AboutUs({title}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="about-us">
      <Hero />
      <AboutUsText />
      <Team /> {/* Include this line if you're using the Team component */}
    </div>
  );
}

export default AboutUs;
