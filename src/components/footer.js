/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faEnvelope} size="1x" data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/muhammad.aleem.hashmi1">
                <FontAwesomeIcon icon={faFacebook} size="1x" data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://github.com/MAleemH">
                <FontAwesomeIcon icon={faGithub} size="1x" data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammad-aleem-hashmi">
                <FontAwesomeIcon icon={faLinkedin} size="1x" data-aos="zoom-in" />
              </a>
            </li>
            <li>
              <a href="https://x.com/MAleemHashmi1">
                <FontAwesomeIcon icon={faTwitter} size="1x" data-aos="zoom-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
