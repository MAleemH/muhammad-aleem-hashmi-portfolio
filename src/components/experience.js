import { FaArrowRight } from 'react-icons/fa';

const Experience = () => (
  <div className="main">
    <div className="container hero-section">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="hero-title text-center">Experience</div>
          <p className="text-center">
            Here you will find more information about my experience
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-2">
          <p className="text-secondary">Mar 2024 – Current</p>
        </div>
        <div className="col-10">
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
                automatically generates emails for new users, stores all emails in
                a database, and fetches emails with attachments via a cron job.
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
    </div>
  </div>
);

export default Experience;
