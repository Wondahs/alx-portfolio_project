import companyLogo1 from "../assets/images/logo-company1.svg";
import companyLogo2 from "../assets/images/logo-company2.svg";
import companyLogo3 from "../assets/images/logo-company3.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import dreamJob from "../assets/images/dream-job.svg";
import addressIcon from "../assets/images/icon-address.svg";
import emailIcon from "../assets/images/icon-email.svg";
import webIcon from "../assets/images/icon-website.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import ctaImage from "../assets/images/large-cta.svg";
import "../assets/styles/home.css"

const Home = () => {
  return (
    <main>
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
          <span>#HEALTHCARE</span>
          <span>#FINANCE</span>
          <span>#EDUCATION</span>
          <span>#ENGINEERING</span>
          <span>#SALES</span>
          <span>#MARKETING</span>
          <span>#HOSPITALITY</span>
          <span>#ADMINISTRATION</span>
          <span>#HUMAN RESOURCES</span>
          <span>#CUSTOMER SERVICE</span>
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
      <section className="who-we-are">
        <div className="left">
          <p className="top-text">
            WHO WE ARE
          </p>
          <h3>Your Bridge To Professional Growth</h3>
          <p>Unlock your career potential with our curated job listings. We connect talented professionals like
            you with top-tier employers across various industries. Our platform offers more than just job
            postings - we provide insights into company cultures, industry trends, and career development
            resources. Whether you're looking to take the next step in your current field or pivot to a new
            industry, we're here to support your journey towards professional success and personal fulfillment.
          </p>
          <button>
            <p>INNOVATIVE MATCHING ALGORITHM</p>
            <img src={rightArrow} alt="" />
          </button>
          <button>
            <p>USER-FRIENDLY INTERFACE</p>
            <img src={rightArrow} alt="" />
          </button>
          <button>
            <p>COMPREHENSIVE JOB LISTINGS</p>
            <img src={rightArrow} alt="" />
          </button>
        </div>
        <div className="right">
          <img src={dreamJob} alt="Dream Job" />
        </div>
      </section>
      <section className="latest-featured-jobs">
        <div className="jobs-header">
          <h3>Latest Featured Jobs</h3>
          <p>Discover exciting career opportunities in the tech industry. Our featured jobs showcase positions
            from leading companies, offering competitive salaries and the chance to work on innovative projects.
            Whether you're a seasoned professional or just starting your career, these roles provide excellent
            opportunities for growth and development in various tech fields.</p>
        </div>
        <div className="featured-jobs">
          <div className="job-card">
            <div className="logo-and-name">
              <img src={companyLogo2} alt="Company Logo" />
              <div>
                <p className="company-name">TechNova Solutions</p>
                <p className="job-type">Full-time</p>
              </div>
            </div>
            <div className="title-and-salary">
              <p className="job-title">Software developer - Full Stack</p>
              <p className="job-salary">Salary: $80,000 per year</p>
            </div>
            <div className="job-description">
              <p>We're seeking a talented Full Stack Developer to join our dynamic team. The ideal candidate
                will have experience in both front-end and back-end development, with a passion for creating
                robust, scalable web applications. You'll work on cutting-edge projects and collaborate with
                a team of experienced developers.</p>
            </div>
            <div className="job-skills">
              <span>
                <p>PHP</p>
              </span>
              <span>
                <p>Database management</p>
              </span>
              <span>
                <p>Django</p>
              </span>
            </div>
          </div>
          <div className="job-card">
            <div className="logo-and-name">
              <img src={companyLogo1} alt="Company Logo" />
              <div>
                <p className="company-name">DataWise Analytics</p>
                <p className="job-type">Contract</p>
              </div>
            </div>
            <div className="title-and-salary">
              <p className="job-title">Data Analyst</p>
              <p className="job-salary">Salary: $75,000 per year</p>
            </div>
            <div className="job-description">
              <p>DataWise Analytics is looking for a skilled Data Analyst to help interpret complex data sets
                and provide actionable insights. You'll work closely with our business intelligence team to
                drive data-driven decision-making across the organization.</p>
            </div>
            <div className="job-skills">
              <span>
                <p>SQL</p>
              </span>
              <span>
                <p>Python</p>
              </span>
              <span>
                <p>Data Visualization</p>
              </span>
            </div>
          </div>
          <div className="job-card">
            <div className="logo-and-name">
              <img src={companyLogo3} alt="Company Logo" />
              <div>
                <p className="company-name">Creative Pulse Interactive</p>
                <p className="job-type">Remote</p>
              </div>
            </div>
            <div className="title-and-salary">
              <p className="job-title">UI/UX Designer</p>
              <p className="job-salary">Salary: $85,000 per year</p>
            </div>
            <div className="job-description">
              <p>Join our innovative design team at Creative Pulse Interactive. We're seeking a UX/UI Designer
                with a keen eye for detail and a user-centered approach. You'll be responsible for creating
                intuitive, visually appealing interfaces for web and mobile applications.</p>
            </div>
            <div className="job-skills">
              <span>
                <p>Adobe Creative Suite</p>
              </span>
              <span>
                <p>Figma</p>
              </span>
              <span>
                <p>Prototyping</p>
              </span>
            </div>
          </div>
        </div>
        <div className="browse-more">
          <a className="browse-more-link" href="/">
            <button className="browse-more-cta">
              BROWSE MORE
            </button>
          </a>
        </div>
      </section>
      <section className="contact-us">
        <div className="cta-text">
          <p>CONTACT US</p>
          <h3>Take Action Now<br /> With JobSync!</h3>
          <p> With JobSync, you're not just finding a job – you're taking the next step in your career journey.
            Start exploring today and discover the role that will help you reach your full professional
            potential.</p>
          <div className="contacts">
            <div className="contacts-address">
              <img src={addressIcon} alt="Address Icon" />
              <div className="address-details">
                <h4>Address</h4>
                <p>BladeVille, Ojo, Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="contacts-phone">
              <img src={phoneIcon} alt="Phone Icon" />
              <div className="phone-details">
                <h4>Phone</h4>
                <p>+234 905 460 4494</p>
              </div>
            </div>
            <div className="contacts-email">
              <img src={emailIcon} alt="Email Icon" />
              <div className="email-details">
                <h4>Email</h4>
                <p>support@jobsync.com</p>
              </div>
            </div>
            <div className="contacts-website">
              <img src={webIcon} alt="Website Icon" />
              <div className="website-details">
                <h4>Website</h4>
                <p>jobsync.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-image">
          <img src={ctaImage} alt="CTA imge" />
        </div>
      </section>
    </main>
  );
}

export default Home;
