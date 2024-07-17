import { useEffect, useCallback } from 'react';

export default function useNavControl(navOpen, navClose) {
  const handleResize = useCallback(() => {
    const navButton = document.getElementById('nav-button');
    const navBar = document.getElementById('nav-bar');
    const filter = document.getElementById('filter');

    if (window.innerWidth > 900) {
      navBar.style.display = 'flex';
      navButton.style.display = 'none';
      document.body.style.overflow = 'visible';
      navButton.setAttribute('open', 'false');
      navButton.src = navOpen;
      if (filter.classList.contains('filter')) filter.classList.remove('filter');
    } else {
      navBar.style.display = 'none';
      navButton.style.display = 'flex';
      document.body.style.overflow = 'visible';
    }
  }, [navOpen]);

  const handleNavClick = useCallback(() => {
    const navButton = document.getElementById('nav-button');
    const navBar = document.getElementById('nav-bar');
    const filter = document.getElementById('filter');

    if (navButton.getAttribute('open') === 'false') {
      navBar.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      navButton.setAttribute('open', 'true');
      navButton.src = navClose;
      filter.classList.add('filter');
    } else {
      navBar.style.display = 'none';
      document.body.style.overflow = 'visible';
      navButton.setAttribute('open', 'false');
      navButton.src = navOpen;
      filter.classList.remove('filter');
    }
  }, [navClose, navOpen]);

  const closeNav = useCallback(() => {
    const navBar = document.getElementById('nav-bar');
    const filter = document.getElementById('filter');
    const navButton = document.getElementById('nav-button');
    
    filter.classList.remove('filter');
    if (window.innerWidth < 900 ) navBar.style.display = 'none';
    navButton.setAttribute('open', 'false');
    navButton.src = navOpen;


  }, [navOpen]);

  useEffect(() => {
    const navButton = document.getElementById('nav-button');
    const navLinks = document.querySelectorAll('nav a');
    navButton.setAttribute('open', 'false');

    window.addEventListener('resize', handleResize);
    navButton.addEventListener('click', handleNavClick);

    navLinks.forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    // Initial call to set up the correct state
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      navButton.removeEventListener('click', handleNavClick);
      navLinks.forEach((link) => {
        link.removeEventListener('click', closeNav);
      });
    };
  }, [handleResize, handleNavClick, closeNav]); // Dependencies for useEffect

  // Return any values or functions you might need in your component
  return null;
}