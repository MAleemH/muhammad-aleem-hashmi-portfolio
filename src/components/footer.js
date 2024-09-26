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
      <div className="row py-5">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h5>MAH</h5>
          <p>
            I&apos;m a software developer! I can help you build a product, feature
            or website Look through some of my work and experience! If you like what
            you see and have a project you need coded, don&apos;t hesitate to contact me.
          </p>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-6 d-flex justify-content-start justify-content-md-end justify-content-lg-end mt-5 mt-md-0 mt-lg-0">
          <div>
            <h5>Social</h5>
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

      <hr />

      <div className="row py-5">
        <div className="col-12">
          <p className="text-center">&copy; Copyright 2024. Made with ❤️ by MAH</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
