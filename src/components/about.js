/* eslint-disable import/no-extraneous-dependencies */
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaAws,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNpm,
  FaMicrosoft,
  FaGoogle,
  FaWordpress,
  FaArrowRight,
} from 'react-icons/fa';
import {
  SiLaravel,
  SiRedux,
  SiRubyonrails,
  SiWebpack,
  SiMysql,
  SiPostgresql,
  SiVisualstudiocode,
  SiSublimetext,
  SiRender,
  SiMailchimp,
  SiStackoverflow,
  SiFigma,
  SiCanva,
  SiWindows,
  SiUbuntu,
} from 'react-icons/si';

const skills = [
  {
    category: 'Front-End',
    skills: [
      { name: 'JavaScript', icon: <FaJs style={{ color: '#f7df1e' }} /> },
      { name: 'Webpack', icon: <SiWebpack style={{ color: '#8dd6f9' }} /> },
      { name: 'React', icon: <FaReact style={{ color: '#00d8ff' }} /> },
      { name: 'Redux', icon: <SiRedux style={{ color: '#764abc' }} /> },
      { name: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
      { name: 'HTML5', icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
      { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
    ],
  },
  {
    category: 'Back-End',
    skills: [
      { name: 'PHP', icon: <FaPhp style={{ color: '#4f5b93' }} /> },
      { name: 'Python', icon: <FaPython style={{ color: '#4584b6' }} /> },
      { name: 'Ruby', icon: <SiRubyonrails style={{ color: '#cc342d' }} /> },
      { name: 'Laravel', icon: <SiLaravel style={{ color: '#f55247' }} /> },
      { name: 'Ruby on Rails', icon: <SiRubyonrails style={{ color: '#cc0000' }} /> },
      { name: 'Node.js', icon: <FaNodeJs style={{ color: '#44883e' }} /> },
      { name: 'NPM', icon: <FaNpm style={{ color: '#cb3837' }} /> },
      { name: 'MySQL', icon: <SiMysql style={{ color: '#00758f' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791' }} /> },
    ],
  },
  {
    category: 'Content Management Systems',
    skills: [
      { name: 'WordPress', icon: <FaWordpress style={{ color: '#21759b' }} /> },
    ],
  },
  {
    category: 'Tools & Methods',
    skills: [
      { name: 'Git', icon: <FaGitAlt style={{ color: '#f05032' }} /> },
      { name: 'GitHub', icon: <FaGithub style={{ color: '#333' }} /> },
      { name: 'Render', icon: <SiRender style={{ color: '#46e3b7' }} /> },
      { name: 'AWS', icon: <FaAws style={{ color: '#232f3e' }} /> },
      { name: 'Mailchimp', icon: <SiMailchimp style={{ color: '#373737' }} /> },
    ],
  },
  {
    category: 'Software',
    skills: [
      { name: 'VS Code', icon: <SiVisualstudiocode style={{ color: '#14acf2' }} /> },
      { name: 'Sublime Text', icon: <SiSublimetext style={{ color: '#FF9800' }} /> },
      { name: 'MS Office', icon: <FaMicrosoft style={{ color: '#ea3e23' }} /> },
      { name: 'Google Workspace', icon: <FaGoogle style={{ color: '#4285f4' }} /> },
    ],
  },
  {
    category: 'Design & Collaboration',
    skills: [
      { name: 'Figma', icon: <SiFigma style={{ color: '#f24e1e' }} /> },
      { name: 'Canva', icon: <SiCanva style={{ color: '#00c4cc' }} /> },
      { name: 'Stack Overflow', icon: <SiStackoverflow style={{ color: '#f48024' }} /> },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Ubuntu', icon: <SiUbuntu style={{ color: '#dd4814' }} /> },
      { name: 'Windows', icon: <SiWindows style={{ color: '#0078d7' }} /> },
    ],
  },
];

const About = () => (
  <div className="main">
    <div className="container hero-section">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="hero-title text-center">About</div>
          <p className="text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
      </div>
    </div>

    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <h3>Who am I?</h3>
          <p>
            I am a software developer with a passion for learning and teaching.
            I love to code and help others learn how to code. I am a self-taught
            developer and have been coding for over 5 years. I have experience
            in a variety of programming languages and technologies. I am
            constantly learning new things and improving my skills.
          </p>
          <p>
            I can help you build a product, feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don&apos;t hesitate to contact me.
          </p>
        </div>
      </div>
    </div>

    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <h3>Education</h3>
        </div>
      </div>

      {/* education 1 */}
      <div
        className="row mb-5"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="col-lg-2 col-md-2 col-sm-12">
          <p className="text-secondary">Mar 2024 – Current</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h5>Full-stack Web Developer</h5>
          <p>CandidateSide, Remote</p>

          <div>
            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>
                Built a comprehensive dashboard for admin, employee, and client
                logins, facilitating efficient task management.
              </div>
            </div>

            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>
                Developed an integrated email system using AWS WorkMail, which
                automatically generates emails for new users, stores all emails
                in a database, and fetches emails with attachments via a cron
                job.
              </div>
            </div>

            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>
                Enabled all users to access the email system through the
                dashboard, enhancing communication and productivity.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* education 2 */}
      <div
        className="row mb-5"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="col-lg-2 col-md-2 col-sm-12">
          <p className="text-secondary">Jan 2024 – Mar 2024</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h5>Computer Operator</h5>
          <p>Noor Memorial Hospital, Mirpur AJ&K</p>

          <div>
            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>
                Maintained various hospital records, including certificates,
                letters, and appointment documents.
              </div>
            </div>

            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>Handled token printing and cash documentation.</div>
            </div>

            <div className="d-flex gap-2">
              <div>
                <FaArrowRight />
              </div>
              <div>
                Managed the printing of important documents and records.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <h3>My Skills</h3>

          <div className="skills-section">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category} className="skill-category">
                <h5>{skillCategory.category}</h5>
                <div className="skills-grid">
                  {skillCategory.skills.map((skill) => (
                    <div
                      key={`${skillCategory.category}-${skill.name}`}
                      className="skill-item"
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
