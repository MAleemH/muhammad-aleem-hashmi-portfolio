/* eslint-disable jsx-a11y/label-has-associated-control */

const Contact = () => (
  <div className="main">
    <div className="container hero-section">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="hero-title text-center">Contact</div>
          <p className="text-center d-lg-block d-md-block d-none">
            If you are interested in working with me, contact me below
          </p>
          <p className="text-center d-lg-none d-md-none d-block">
            If you have an application you are interested in developing, a feature
            that you need built or a project that needs coding. I&apos;d love to help with it
          </p>
        </div>
      </div>
    </div>

    <div className="container mb-3">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-12">
          <form id="contactForm">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input type="text" className="form-control" id="nameInput" name="name" />
            </div>

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input type="email" className="form-control" id="emailInput" name="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">Message</label>
              <textarea className="form-control" id="messageInput" name="message" rows="3" />
            </div>

            <button type="submit" className="btn btn-primary">Get in Touch</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
