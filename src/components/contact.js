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
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="nameInput" name="name" placeholder="Muhammad Ali" />
              <label htmlFor="nameInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="emailInput" name="email" placeholder="example@email.com" />
              <label htmlFor="emailInput">Email</label>
            </div>

            <div className="form-floating mb-3">
              <textarea className="form-control" id="messageInput" name="message" placeholder="Type here..." />
              <label htmlFor="messageInput">Message</label>
            </div>

            <div className="text-center">
              <button type="submit" className="form-btn">Get in Touch</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
