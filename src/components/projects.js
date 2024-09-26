/* eslint-disable import/no-extraneous-dependencies */
import {
  FaReact,
  FaPhp,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';
import {
  SiRedux,
  SiRubyonrails,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';

import code from '../assets/images/projects/code.jpg';

const Projects = () => (
  <div className="main">
    <div className="container hero-section">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="hero-title text-center">Projects</div>
          <p className="text-center">
            Here you will find more information about my projects
          </p>
        </div>
      </div>
    </div>

    <div className="container mb-5">
      <div className="row gap-5">
        {/* Project 1 */}
        <div className="col-12 project-card" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={code} alt="Project-Img" className="w-100 h-100" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-3 d-flex flex-column gap-2">
              <h3>Counseling App</h3>

              <p>
                Users can view psychologists available and manage appointments with psychologists.
                There is an admin portal to manage the whole website.
              </p>

              <div className="d-flex gap-1 mb-3">
                <span className="badge" style={{ backgroundColor: '#00d8ff' }}>
                  <FaReact className="me-1" />
                  React
                </span>
                <span className="badge" style={{ backgroundColor: '#764abc' }}>
                  <SiRedux className="me-1" />
                  Redux
                </span>
                <span className="badge" style={{ backgroundColor: '#cc0000' }}>
                  <SiRubyonrails className="me-1" />
                  Rails
                </span>
                <span className="badge" style={{ backgroundColor: '#336791' }}>
                  <SiPostgresql className="me-1" />
                  PostgreSQL
                </span>
              </div>

              <a href="/projects" className="project-view-btn align-self-start">View Details</a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="col-12 project-card" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2 order-sm-1">
              <img src={code} alt="Project-Img" className="w-100 h-100" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1 order-sm-2 mt-lg-0 mt-md-0 mt-sm-3 d-flex flex-column gap-2">
              <h3>Online Babysitters</h3>

              <p>
                Users can view details of services, babysitters, and contact admin. There is
                an admin panel to manage the whole website.
              </p>

              <div className="d-flex gap-1 mb-3">
                <span className="badge" style={{ backgroundColor: '#7952b3' }}>
                  <FaBootstrap className="me-1" />
                  Bootstrap
                </span>
                <span className="badge" style={{ backgroundColor: '#4f5b93' }}>
                  <FaPhp className="me-1" />
                  PHP
                </span>
                <span className="badge" style={{ backgroundColor: '#00758f' }}>
                  <SiMysql className="me-1" />
                  MySQL
                </span>
              </div>

              <a href="/projects" className="project-view-btn align-self-start">View Details</a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="col-12 project-card" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={code} alt="Project-Img" className="w-100 h-100" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-3 d-flex flex-column gap-2">
              <h3>Awesome Books</h3>

              <p>
                Users can manage book records. Its key features are that it is a single-page
                application and data is stored in local storage and displayed dynamically.
              </p>

              <div className="d-flex gap-1 mb-3">
                <span className="badge" style={{ backgroundColor: '#f7df1e' }}>
                  <FaJs className="me-1" />
                  JavaScript
                </span>
                <span className="badge" style={{ backgroundColor: '#e34f26' }}>
                  <FaHtml5 className="me-1" />
                  HTML5
                </span>
                <span className="badge" style={{ backgroundColor: '#1572b6' }}>
                  <FaCss3Alt className="me-1" />
                  CSS3
                </span>
              </div>

              <a href="/projects" className="project-view-btn align-self-start">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
