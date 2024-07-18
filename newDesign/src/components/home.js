import React from 'react';
import './styles/home.css';
import './styles/layout.css';

const JobSync = () => {
  return (
    <div>
      <div id="filter"></div>
      <Header />
      <main>
        <JobsCompanyCandidates />
        <WhoWeAre />
        <LatestFeaturedJobs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header>
    <h1 id="company-name">Job sync</h1>
    <nav id="nav-bar">
      <ul className="header-nav">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Job List</a></li>
        <li><a href="">Pages</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    </nav>
    <a className="get-started" href=""><button id="get-started-cta">Get Started</button></a>
    <img id="nav-button" src="./images/nav-button.svg" alt="Nav Button" className="nav-button" />
  </header>
);

const JobsCompanyCandidates = () => (
  <section className="jobs-company-candidates">
    <div className="potential">
      <h2><span>Unlock Your Potential:</span> Find Your<br /> Perfect Job at JobSync</h2>
    </div>
    <div className="description-text">
      <p>At JobSync, we believe in connecting talent with opportunity. Our advanced job matching algorithm
        considers your skills, experience, and career goals to present you with roles that align perfectly
        with your aspirations. We partner with a diverse range of employers, from innovative startups to
        established industry leaders, ensuring a wide variety of opportunities across different sectors.
      </p>
    </div>
    <div className="sectors">
      {['HEALTHCARE', 'FINANCE', 'EDUCATION', 'ENGINEERING', 'SALES', 'MARKETING', 'HOSPITALITY', 'ADMINISTRATION', 'HUMAN RESOURCES', 'CUSTOMER SERVICE'].map(sector => (
        <span key={sector}>#{sector}</span>
      ))}
    </div>
    <div className="job-company-count">
      <span>
        <p className="job-count">1300+</p>
        <p className="job-count-text">Jobs Available</p>
      </span>
      <span>
        <p className="company-count">300+</p>
        <p className="company-count-text">Top Companies</p>
      </span>
      <span>
        <p className="candidate-count">3000+</p>
        <p className="caniddate-count-text">Candidates Hired</p>
      </span>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section className="who-we-are">
    <div className="left">
      <p className="top-text">WHO WE ARE</p>
      <h3>Your Bridge To Professional Growth</h3>
      <p>Unlock your career potential with our curated job listings. We connect talented professionals like
        you with top-tier employers across various industries. Our platform offers more than just job
        postings - we provide insights into company cultures, industry trends, and career development
        resources. Whether you're looking to take the next step in your current field or pivot to a new
        industry, we're here to support your journey towards professional success and personal fulfillment.
      </p>
      {['INNOVATIVE MATCHING ALGORITHM', 'USER-FRIENDLY INTERFACE', 'COMPREHENSIVE JOB LISTINGS'].map(text => (
        <button key={text}>
          <p>{text}</p>
          <img src="./images/right-arrow.svg" alt="" />
        </button>
      ))}
    </div>
    <div className="right">
      <img src="./images/dream-job.svg" alt="Dream Job" />
    </div>
  </section>
);

const LatestFeaturedJobs = () => (
  <section className="latest-featured-jobs">
    <div className="jobs-header">
      <h3>Latest Featured Jobs</h3>
      <p>Discover exciting career opportunities in the tech industry. Our featured jobs showcase positions
        from leading companies, offering competitive salaries and the chance to work on innovative projects.
        Whether you're a seasoned professional or just starting your career, these roles provide excellent
        opportunities for growth and development in various tech fields.</p>
    </div>
    <div className="featured-jobs">
      {[
        {
          logo: './images/logo-company1.svg',
          company: 'TechNova Solutions',
          type: 'Full-time',
          title: 'Software developer - Full Stack',
          salary: '$80,000 per year',
          description: 'We\'re seeking a talented Full Stack Developer to join our dynamic team. The ideal candidate will have experience in both front-end and back-end development, with a passion for creating robust, scalable web applications. You'll work on cutting-edge projects and collaborate with a team of experienced developers.',
          skills: ['PHP', 'Database management', 'Django']
        },
        {
          logo: './images/logo-company2.svg',
          company: 'DataWise Analytics',
          type: 'Contract',
          title: 'Data Analyst',
          salary: '$75,000 per year',
          description: 'DataWise Analytics is looking for a skilled Data Analyst to help interpret complex data sets and provide actionable insights. You'll work closely with our business intelligence team to drive data-driven decision-making across the organization.',
          skills: ['SQL', 'Python', 'Data Visualization']
        },
        {
          logo: './images/logo-company3.svg',
          company: 'Creative Pulse Interactive',
          type: 'Remote',
          title: 'UI/UX Designer',
          salary: '$85,000 per year',
          description: 'Join our innovative design team at Creative Pulse Interactive. We're seeking a UX/UI Designer with a keen eye for detail and a user-centered approach. You'll be responsible for creating intuitive, visually appealing interfaces for web and mobile applications.',
          skills: ['Adobe Creative Suite', 'Figma', 'Prototyping']
        }
      ].map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
    <div className="browse-more">
      <a className="browse-more-link" href="#">
        <button className="browse-more-cta">BROWSE MORE</button>
      </a>
    </div>
  </section>
);

const JobCard = ({ logo, company, type, title, salary, description, skills }) => (
  <div className="job-card">
    <div className="logo-and-name">
      <img src={logo} alt="Company Logo" />
      <div>
        <p className="company-name">{company}</p>
        <p className="job-type">{type}</p>
      </div>
    </div>
    <div className="title-and-salary">
      <p className="job-title">{title}</p>
      <p className="job-salary">Salary: {salary}</p>
    </div>
    <div className="job-description">
      <p>{description}</p>
    </div>
    <div className="job-skills">
      {skills.map(skill => (
        <span key={skill}><p>{skill}</p></span>
      ))}
    </div>
  </div>
);

const ContactUs = () => (
  <section className="contact-us">
    <div className="cta-text">
      <p>CONTACT US</p>
      <h3>Take Action Now<br /> With JobSync!</h3>
      <p> With JobSync, you're not just finding a job – you're taking the next step in your career journey.
        Start exploring today and discover the role that will help you reach your full professional
        potential.</p>
      <div className="contacts">
        {[
          { icon: 'icon-address.svg', title: 'Address', detail: 'BladeVille, Ojo, Lagos, Nigeria.' },
          { icon: 'icon-phone.svg', title: 'Phone', detail: '+234 905 460 4494' },
          { icon: 'icon-email.svg', title: 'Email', detail: 'support@jobsync.com' },
          { icon: 'icon-website.svg', title: 'Website', detail: 'jobsync.com' }
        ].map(contact => (
          <div key={contact.title} className={`contacts-${contact.title.toLowerCase()}`}>
            <img src={`./images/${contact.icon}`} alt={`${contact.title} Icon`} />
            <div className={`${contact.title.toLowerCase()}-details`}>
              <h4>{contact.title}</h4>
              <p>{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="cta-image">
      <img src="./images/large-cta.svg" alt="CTA imge" />
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="logo-address-nav-help">
      <div className="description">
        <div className="logo-and-name">
          <img src="./images/footer-company-logo.svg" alt="Company Logo" />
          <h4>JobSync</h4>
        </div>
        <p>Discover and unlock your potentials.</p>
        <div className="socials">
          {['facebook', 'twitter', 'instagram', 'github'].map(platform => (
            <a key={platform} href="#"><img src={`./images/logo-${platform}.svg`} alt={`${platform} Icon`} /></a>
          ))}
        </div>
      </div>
      <div className="contact">
        <h4>Address</h4>
        <p>BladeVille, Ojo, Lagos, Nigeria.</p>
        <h4>Contact</h4>
        <p>+234 905 460 4494</p>
        <p>support@jobsync.com</p>
      </div>
      <div className="navigation">
        <h4>Navigation</h4>
        <ul>
          {['Home', 'About', 'Jobs', 'Contact'].map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="help">
        <h4>Help</h4>
        <ul>
          {['FAQs', 'Terms & Conditions', 'Privacy Policy'].map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <p>&copy; 2024 JobSync. All rights reserved.</p>
    </div>
  </footer>
);

export default JobSync;
