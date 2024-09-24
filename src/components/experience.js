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
          <div className="d-flex gap-3">
            <p>CandidateSide,</p>
            <p>Remote</p>
          </div>
          <ul className="job-description">
            <li>
              Built a comprehensive dashboard for admin, employee, and client
              logins, facilitating efficient task management.
            </li>
            <li>
              Developed an integrated email system using AWS WorkMail, which
              automatically generates emails for new users, stores all emails in
              a database, and fetches emails with attachments via a cron job.
            </li>
            <li>
              Enabled all users to access the email system through the
              dashboard, enhancing communication and productivity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
