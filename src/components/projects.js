/* eslint-disable import/no-extraneous-dependencies */
import {
  FaReact,
} from 'react-icons/fa';
import {
  SiRedux,
  SiRubyonrails,
  SiPostgresql,
} from 'react-icons/si';

import logo from '../assets/images/projects/code.jpg';

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

    <div className="container">
      <div className="row">
        <div className="col-12 project-card">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={logo} alt="Project-Img" className="w-100 h-100" />
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
      </div>
    </div>
  </div>
);

export default Projects;
