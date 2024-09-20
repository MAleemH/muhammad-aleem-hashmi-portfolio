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
  <div className="footer">
    <p>&copy; All rights reserved.</p>

    <ul className="socialContainer">
      <li>
        <a href="mailto:muhammad.aleem.hashmi.official@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/muhammad.aleem.hashmi1">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
      </li>
      <li>
        <a href="https://github.com/MAleemH">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/muhammad-aleem-hashmi">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </li>
      <li>
        <a href="https://x.com/MAleemHashmi1">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
