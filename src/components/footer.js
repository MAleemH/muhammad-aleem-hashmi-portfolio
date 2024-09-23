/* eslint-disable import/no-extraneous-dependencies */
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">
          <p>&copy; All rights reserved.</p>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center justify-content-sm-center justify-content-md-end justify-content-lg-end">
          <ul className="socialContainer">
            <li>
              <a href="mailto:muhammad.aleem.hashmi.official@gmail.com">
                <FaEnvelope title="Email" style={{ fontSize: '20px', color: '#fff' }} data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/muhammad.aleem.hashmi1">
                <FaFacebook title="Facebook" style={{ fontSize: '20px', color: '#fff' }} data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://github.com/MAleemH">
                <FaGithub title="GitHub" style={{ fontSize: '20px', color: '#fff' }} data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammad-aleem-hashmi">
                <FaLinkedin title="LinkedIn" style={{ fontSize: '20px', color: '#fff' }} data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://x.com/MAleemHashmi1">
                <FaTwitter title="Twitter" style={{ fontSize: '20px', color: '#fff' }} data-aos="zoom-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
